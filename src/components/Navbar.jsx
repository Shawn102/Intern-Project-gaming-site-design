import React from 'react';
// import styles from './Header.module.css';
import gameLogo from '../images/gameLogo.png';

const headerMenuText = ["注册", "登录", "帮助", "更多"];

export const NavHeader = () => {
    return (
        <header className="head">
            <nav>
                <div className="gameLogo">
                    <div className="logo">
                        <a href="#"><img className="logo_image" src={gameLogo} alt="gameLogo" /></a>
                    </div>
                    <div className="links">
                        <a href="">开心网</a>
                        <div className="border"></div>
                        <a href="">游戏大才</a>
                        <a href="#" >首页</a>
                    </div>
                </div>

                <div className="menu">
                    {
                        headerMenuText.map((data, uid) => <a href="#" key={uid}>{data}</a>)
                    }
                </div>
            </nav>
        </header>
    );
};
