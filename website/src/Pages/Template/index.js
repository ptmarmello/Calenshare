import React from 'react';
import './styles.css';

//This is the Template used in all the principal pages

export default function Template({children, headerProps, footerProps}){
    return(
        <div className="App">
            <header className="App-header">
                {headerProps}
            </header>


            <div className="App-main">
                <div className="main-content">
                    {children}
                </div>
            </div>


            <footer className="App-footer">
                {footerProps}
            </footer>
        </div>
    );
}