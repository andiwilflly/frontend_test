import React from 'react';
import { Link } from "react-router-dom";


class HomePage extends React.Component {


    render() {
        return (
            <div>
                <Link to="/desktop">Desktop</Link>
                <br/>
                <Link to="/transactions">Transactions</Link>
            </div>
        );
    }
}


export default HomePage;
