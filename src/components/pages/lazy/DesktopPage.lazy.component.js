import React from 'react';
// Utils
import lazy from "utils/lazy.utils";


class DesktopPage extends React.Component {}


export default lazy(()=> import(/* webpackChunkName: "DesktopPage" */ 'components/pages/DesktopPage.component'))(DesktopPage);
