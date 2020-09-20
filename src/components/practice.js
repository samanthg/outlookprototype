import React from 'react'
import AllPanelView from './AllPanelView'

const Practice = (props) => {
    var gid = props.match.params.gid;
    var boxName = props.match.params.boxName;
    console.log(props)
    return (
        <AllPanelView name={boxName} gid={gid}/>
    );
}

export default Practice;