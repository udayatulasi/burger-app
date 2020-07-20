import React from 'react'
import classes from './Burger.module.css';
import Items from './items/items'
import { object } from 'prop-types';
function Burger(props) {
    let transformedItems= Object.keys(props.items)
                .map(itKey =>{
                    return [...Array(props.items[itKey])].map((_,i)=>{
                       return <Items key={itKey+i} type={itKey} />
                    })
                })
                .reduce((arr,el)=>{
                    return arr.concat(el)
                },[]);
                if(transformedItems.length === 0)
                {
                    transformedItems = <p>Please start adding ingredients!</p>
                }
    return (
        <div className={classes.Burger}>
            <Items type="bread-top" />
            {transformedItems}
            <Items type="bread-bottom" />
        </div>
    )
}

export default Burger
