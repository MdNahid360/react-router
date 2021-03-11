import React from 'react';
import msg from '../../img/404-error.jpg';
import './Nomatch.css'
const NoMatch = () => {
    return (
        <div className="main3 bg-white">
           
                    <img src={msg} className="img-fluid" alt="msg"/>
                <h1 className="tx text-dark">Page Not Fount</h1>
           
        </div>
    );
};

export default NoMatch;