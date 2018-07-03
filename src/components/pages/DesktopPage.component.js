import React from 'react';
import { Link } from 'react-router-dom';
// MobX
import { observer } from "mobx-react";
// Components
import Desktop from "components/parts/desktop/Desktop.component";


class DesktopPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Link to="/">Home</Link>
                <br/>
                <br/>
                <p>Used modules:</p>
                <p>For resize: <a target="_blank" rel="noopener noreferrer" href="https://github.com/STRML/react-resizable">react-resizable</a></p>
                <p>For sortable list: <a target="_blank" rel="noopener noreferrer" href="https://github.com/clauderic/react-sortable-hoc">react-sortable-hoc</a></p>
                <br/>
                <br/>
                <Desktop />
            </React.Fragment>
        );
    }
}


export default observer(DesktopPage);
