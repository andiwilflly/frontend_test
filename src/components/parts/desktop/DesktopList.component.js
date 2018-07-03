import React from "react";
// @SOURCE: https://github.com/clauderic/react-sortable-hoc
import { SortableContainer } from 'react-sortable-hoc';
// Components
import DesktopItem from "components/parts/desktop/DesktopItem.component";


export default SortableContainer(({ items })=> {
    return (
        <ul>
            { items.map((item, i)=> {
                return (
                    <DesktopItem key={i} index={ i } item={ item }/>
                );
            }) }
        </ul>
    );
})

