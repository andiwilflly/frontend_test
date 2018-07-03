import React from "react";
// MobX
import { observer } from "mobx-react";
// @SOURCE: https://github.com/STRML/react-resizable
import { ResizableBox } from 'react-resizable';
// @SOURCE: https://github.com/clauderic/react-sortable-hoc
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
// Store
import store from "store";


const DragHandle = SortableHandle(observer(({ children })=> {
    return (
        <h2 style={{ background: '#965a5a', padding: 10, cursor: "move" }}>{ children }</h2>
    );
}));


const DeleteButton = observer(({ itemId })=> {
    return (
        <button style={{ margin: 10, padding: 10 }}
                onClick={ ()=> store.desktop.delete(itemId) }>Remove</button>
    );
});

export default SortableElement(observer(({ item })=> {
    return (
        <ResizableBox width={ 500 }
                      height={ item.height }
                      minConstraints={[50, 50]}
                      onResize={ (e, data)=> item.update({ height: data.size.height }) }
                      onResizeStop={ (e, data)=> item.update({ height: data.size.height }) }
                      axis="y">
            <div style={{ border: "1px solid gray", width: "500px", marginBottom: "10px", height: item.height }}>
                <DragHandle>{ item.title }</DragHandle>
                <DeleteButton itemId={ item.id } />
            </div>
        </ResizableBox>
    );
}));

