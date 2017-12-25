import React, {Component} from 'react';
const Button = (props) => {
    return(<div>
        <button onClick={()=>{props.sub("sub")}}>subtract</button>
    <button onClick={()=>{props.sub("add")}}>add</button>
    <br/>
    <button onClick={()=>{props.sub("increase")}}>increase</button>
    <button onClick={()=>{props.sub("decrease")}}>decrease</button>
    </div>
);
}

export default Button;