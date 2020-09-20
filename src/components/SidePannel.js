import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './style.css'
import Inbox from './inbox'
import alldata from './data/data.json'
const SidePannel = (props) => {
    
    return(
        
        <div className="wrapper">
            
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Outlook Mailbox</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/inbox" >Inbox_______________{alldata.filter(p => { return p.label == 'inbox'}).length}</Link>
                        <Link to='/spam'>Spam_______________{alldata.filter(p => { return p.label == 'spam'}).length}</Link>
                        <Link to='/trash'>Trash_______________{alldata.filter(p => { return p.label == 'trash'}).length}</Link>
                    </li>
                </ul>
            </nav>
            <nav id="sidebarmain">  
                <div className="box-header">
                    <h3>{props.name.toUpperCase()}</h3>
                </div>
                {
                    alldata.filter(p => { return p.label == props.name}).map(p => <Inbox key={p.mId} {...p}/>)
                }
            </nav>
        </div>
    );
}

export default SidePannel;