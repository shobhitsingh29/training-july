import React from "react"
import ReactDOM from "react-dom"

import PropTypes from 'prop-types';
const Listitem = (props)=><li className="list-item" ></li>
const List = ({items})=>(
    <ul className="list">
        {items.map((item,index) => <Listitem  key={index}   item={item}/>)}
    </ul>
);


const Body = (props) => {
    let items = props.rawItems;
    return ( <div>
        <h1>{ props.header}</h1>
        <List items={items}/></div>);
};


const Page =(props)=> {
    return (<div>
        <Body header="My List" rawItems={props.rawItems}/>
    </div>);
};
Page.propTypes = {

    rawItems: PropTypes.array.isRequired
};

Page.defaultProps = {
    rawItems: [1 , 1223, 4, 5]
};
export default Page;