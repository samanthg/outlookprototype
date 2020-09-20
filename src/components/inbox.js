import React, { useEffect } from 'react';
import './style.css'
import alldata from './data/data.json'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Inbox = ({mId,unread,subject,content, label}) =>{
    var viewName = label +"/" + mId;
    function handleClick(){
        var check = window.confirm("Are You sure")
        if(check){
            var moveItem = alldata.filter(p => {return p.mId == mId});
            moveItem.[0].label = 'trash';
        }
    }
    function handleSpam(){
        var check = window.confirm("Are You sure")
        if(check){
            var moveItem = alldata.filter(p => {return p.mId == mId});
            moveItem.[0].label = 'spam';
        }
    }
    return(
        <div >
            <ul className="outset">
                <li>
                    <a href= {viewName}>
                        <h5 >{mId}</h5>
                        <p >Subject:    {subject}</p>
                        <small>{content.substring(0,60)}</small>
                    </a>
                </li>
                <button onClick={handleClick}>Delete</button> <button onClick={handleSpam}>Spam</button>
            </ul>

        </div>
    );
}

export default Inbox;