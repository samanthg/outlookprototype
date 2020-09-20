import React from 'react';
import './style.css'
const MailView = ({mId,unread,subject,content}) =>{
    return(
        <div >
            <ul className="list-unstyled components">
                        <h5 >{mId}</h5>
                        <p >Subject: {subject}</p>
                        <small>{content}</small>
            </ul>
        </div>
    );
}

export default MailView;