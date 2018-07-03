import { types } from "mobx-state-tree";
import { values } from "mobx";
// Models
import TransactionModel from "models/transactions/Transaction.model";


const Transactions = {
    socket: types.frozen,
    all: types.optional(types.map(TransactionModel), {}),
    status: types.string
};


const actions = (self)=> {

    return {

        create(transaction = {}) {
            if(self.all.has(transaction.hash)) return self.all.get(transaction.hash).update(transaction);
            self.all.set(transaction.hash, transaction);
        },


        clear() {
            self.all.clear();
        },


        startTransactionsWS() {
            self.status = "started";
            self.socket.send(JSON.stringify({op: "unconfirmed_sub"}));
        },


        stopTransactionsWS() {
            self.status = "stopped";
            self.socket.send(JSON.stringify({op: "unconfirmed_unsub"}));
        },


        // Hooks
        afterCreate() {
            self.socket = new WebSocket('wss://ws.blockchain.info/inv');

            self.socket.onmessage = (msg)=> {
                msg = JSON.parse(msg.data);
                const sumInputs = msg.x.inputs.reduce((aggregator, input)=> {
                    return aggregator + input.prev_out.value;
                }, 0);
                const sumOut = msg.x.out.reduce((aggregator, out)=> {
                    return aggregator + out.value;
                }, 0);

                self.create({
                    time: msg.x.time,
                    hash: msg.x.hash,
                    from: msg.x.inputs.map((input)=> input.prev_out.addr).join(" "),
                    to: msg.x.out.map((out)=> out.addr).join(" "),
                    sum: (sumInputs + sumOut) / 100000000
                });
            };
        }
    }
};


const views = (self)=> {

    return {
        get sum() { return values(self.all).reduce((aggregator, transaction)=> aggregator + transaction.sum, 0); }
    }
};

export default types.model("Transactions", Transactions).actions(actions).views(views);
