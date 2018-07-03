import { types } from "mobx-state-tree";


const DesktopItem = {
    id: types.number,
    index: types.number,
    height: types.number,
    title: types.string
};


const actions = (self)=> {

    return {

        update(item = {}) {
            Object.keys(self).forEach((fieldName)=> {
                if (item[fieldName] !== undefined) self[fieldName] = item[fieldName];
            });
        }
    }
};


export default types.model("DesktopItem", DesktopItem).actions(actions);
