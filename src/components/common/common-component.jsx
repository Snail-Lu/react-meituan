import React,{ Component } from 'react';
import "./common-component.scss";


// const ActivityLable = (props) => (
//     <div className="activity-label">{props.content}</div>
// );
const ActivityLabel = (props) => {
    return <div className="activity-label">{props.content}</div>
}

const Another = (props) => {
return <div>{props.name}</div>
}

export { ActivityLabel,Another };
