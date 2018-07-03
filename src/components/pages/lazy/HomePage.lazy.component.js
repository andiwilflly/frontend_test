import React from 'react';
// Utils
import lazy from "utils/lazy.utils";


class HomePage extends React.Component {}


export default lazy(()=> import(/* webpackChunkName: "HomePage" */ 'components/pages/HomePage.component'))(HomePage);
