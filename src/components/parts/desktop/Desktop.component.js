import React from "react";
// MobX
import { observer } from "mobx-react";
// Store
import store from "store";
// Components
import DesktopList from "components/parts/desktop/DesktopList.component";


class Desktop extends React.Component {

    get items() { return store.desktop.sortedItems; };


    onSortEnd = ({ oldIndex, newIndex })=> {
        const prevItem = this.items[oldIndex];
        const nextItem = this.items[newIndex];
        prevItem.update({ index: newIndex });
        nextItem.update({ index: oldIndex });
    };


    restoreRemovedItem = ()=> {
        store.desktop.create({ ...store.desktop.removedItem, height: 100, index: store.desktop.lastIndex + 1 });
        store.desktop.deleteRemovedItem();
    };


    render() {
        return (
            <div>
                <button style={{ margin: 10, padding: 10 }} onClick={ store.desktop.resetBlocks }>Reset blocks to default</button>
                <DesktopList useDragHandle={true}
                             onSortEnd={ this.onSortEnd }
                             items={ this.items } />
                { store.desktop.removedItem ?
                    <button onClick={ this.restoreRemovedItem } style={{ padding: 10, margin: 10 }}>Restore item!</button>
                    : null }
            </div>
        );
    }
}


export default observer(Desktop);