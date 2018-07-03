import React from 'react';
import { Link } from 'react-router-dom';
// MobX
import { observer } from "mobx-react";
// Components
import Transactions from "components/parts/transactions/Transactions.component";


class DesktopPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Link to="/">Home</Link>
                <br/>
                <br/>
                <p>Used modules:</p>
                <p>For table: <a target="_blank" rel="noopener noreferrer" href="https://github.com/bvaughn/react-virtualized">react-virtualized</a></p>
                <br/>
                <br/>
                <Transactions />
            </React.Fragment>
        );
    }
}


export default observer(DesktopPage);
