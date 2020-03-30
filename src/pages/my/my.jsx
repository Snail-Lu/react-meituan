import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import './my.scss';

class My extends Component {
    render() {
        return (
            <div className="my">
                <header className="my-header">个人中心</header>
                <div className="my-content">
                    个人中心
                </div>
                <footer className="my-footer">
                    <Navbar />
                </footer>
            </div>
        );
    }
}

export default My;