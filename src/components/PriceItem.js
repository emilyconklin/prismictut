import React from 'react'
import styled from 'styled-components'
import RichText from '../components/richText'

const PIwrapper = styled.div`
flex-grow:1;
flex-bases:0;
margin: 0 10px;
background: ${p => p.mostpop ? 'orange' : '#eee'};
color: ${p => p.mostpop ? 'white' : 'black'};
padding: 10px;
position: relative;

.desc {
    margin-top: 20px;
}

.mostpop {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    background: green;
    color: white;
    font-weight: bold;
}

.price {
    font-size: 30px;
    background: rgba(0,0,0,0.2);
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
}

.duration {
    font-size: 16px;
}`

function PriceItem({ title, price, desc, mostpop }) {
    return (
        <PIwrapper mostpop={mostpop}>
            {!!mostpop &&
                <div className="mostpop">Most Popular</div>
            }
            <RichText render={title} />
            <div className="price">
                ${price} <span className="duration">/ month</span>
            </div>
            <div className="desc">
                <RichText render={desc} /></div>
        </PIwrapper>
    )
}

export default PriceItem
