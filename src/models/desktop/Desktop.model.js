import { types } from "mobx-state-tree";
import { values, runInAction } from "mobx";
// Models
import DesktopItemModel from "models/desktop/DesktopItem.model";


const defaultItems = {
    0: { id: 0, index: 0, height: 100, title: "Title 1"},
    1: { id: 1, index: 1, height: 100, title: "Title 2"},
    2: { id: 2, index: 2, height: 100, title: "Title 3"},
    3: { id: 3, index: 3, height: 100, title: "Title 4"}
};


const Desktop = {
    items: types.optional(types.map(DesktopItemModel), {}),
    removedItem: types.frozen
};


const actions = (self)=> {

    return {

        create(item = {}) {
            if(self.items.has(item.id)) return self.all.get(item.id).update(item);
            self.items.set(item.id, item);
        },


        delete(itemId) {
            const removedItem = self.items.get(itemId).toJSON();
            window.localStorage.setItem("removedDesktopItem", JSON.stringify(removedItem));
            self.removedItem = removedItem;
            self.items.delete(itemId);
        },


        deleteRemovedItem() {
            window.localStorage.removeItem("removedDesktopItem");
            self.removedItem = null;
        },


        resetBlocks() {
            window.localStorage.removeItem("desktopItems");
            window.localStorage.removeItem("removedDesktopItem");

            self.items.clear();
            self.createBlocks();

        },


        createBlocks() {
            const historyItems = window.localStorage.getItem("desktopItems");
            const items = historyItems ? JSON.parse(historyItems) : defaultItems;
            Object.keys(items).map((key)=> self.create(items[key]));
        },


        // Hooks
        afterCreate() {
            self.createBlocks();
            self.removedItem = JSON.parse(window.localStorage.getItem("removedDesktopItem"));
        },

        postProcessSnapshot(snapshot) {
            window.localStorage.setItem("desktopItems", JSON.stringify(snapshot.items));
        }
    }
};


const views = (self)=> {

    return {
        get sortedItems() { return values(self.items).sort((a, b)=> a.index > b.index) },
        get lastIndex() { return values(self.items).reduce((index, item)=> item.index > index ? item.index : index, 0) }
    };
};

export default types.model("Desktop", Desktop).actions(actions).views(views);
