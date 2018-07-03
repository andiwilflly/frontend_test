import React from 'react';
import { Column, Table } from "react-virtualized";
// Store
import store from "store";
// MobX
import { values } from "mobx";
import { observer } from "mobx-react";


class Transactions extends React.Component {

    get transactions() { return values(store.transactions.all); };


    headerRenderer = (table)=> {
        return (
            <React.Fragment key={table.dataKey}>
                <div className="ReactVirtualized__Table__headerTruncatedText">
                    {table.label}
                </div>
            </React.Fragment>
        );
    };


    render() {
        return (
            <div>
                <button disabled={ store.transactions.status === "started" }
                        style={{ padding: 10, margin: 10, background: "green", opacity: store.transactions.status === "started" ? 0.5 : 1}}
                        onClick={ store.transactions.startTransactionsWS }>Start</button>

                <button disabled={ store.transactions.status === "stopped" }
                        style={{ padding: 10, margin: 10, background: "red", opacity: store.transactions.status === "stopped" ? 0.5 : 1}}
                        onClick={ store.transactions.stopTransactionsWS }>Stop</button>

                <button style={{ padding: 10, margin: 10, background: "yellow"}}
                        onClick={ store.transactions.clear }>Reset</button>

                <h1>Sum: { store.transactions.sum } BTC</h1>
                <br/>
                <br/>

                <Table
                    width={window.innerWidth}
                    height={600}
                    headerHeight={ 50 }
                    rowHeight={ 150 }
                    rowCount={ this.transactions.length }
                    rowGetter={({ index }) => this.transactions[index] }>
                    <Column
                        headerRenderer={this.headerRenderer}
                        dataKey="from"
                        label="From"
                        width={window.innerWidth / 7 * 3}
                    />
                    <Column
                        headerRenderer={this.headerRenderer}
                        dataKey="to"
                        label="To"
                        width={window.innerWidth / 7 * 3}
                    />
                    <Column
                        dataKey="sum"
                        label="Sum"
                        width={window.innerWidth / 7}
                    />
                </Table>
            </div>
        );
    }
}


export default observer(Transactions);
