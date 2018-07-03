import { types } from "mobx-state-tree";
// Models


const Transaction = {
    hash: types.string,
    time: types.number,
    from: types.string,
    to: types.string,
    sum: types.number
};


const actions = (self)=> {

    return {
    }
};


export default types.model("Transaction", Transaction).actions(actions);
