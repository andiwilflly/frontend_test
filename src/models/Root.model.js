import { types } from "mobx-state-tree";
// Models
import DesktopModel from "models/desktop/Desktop.model";
import TransactionsModel from "models/transactions/Transactions.model";


const RootModel = {
    desktop: DesktopModel,
    transactions: TransactionsModel
};


export default types.model(RootModel);
