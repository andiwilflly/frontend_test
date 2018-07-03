import React from 'react';
// Utils
import lazy from "utils/lazy.utils";


class TransactionsPage extends React.Component {}


export default lazy(()=> import(/* webpackChunkName: "TransactionsPage" */ 'components/pages/TransactionsPage.component'))(TransactionsPage);
