import React from 'react'
import RichText from '../components/richText'
import styled from 'styled-components'
import PriceItem from '../components/PriceItem'

const PriceListWrapper = styled.section`
max-width: 800px;
margin: 0 auto;

>div:last-child{
    display: flex;
}`

function PriceList({title, prices}) {
    return (
       <PriceListWrapper>
           <RichText render={title}/>
           <div>
           {prices.map((price, i)=> {
                return (<PriceItem
                mostpop={price.price_type === 'Most Popular'}
                title={price.price_list_title}
                price={price.price_per_month}
                desc={price.price_list_description}
                key={i}/>)
           })}</div>
        </PriceListWrapper>
    )
}

export default PriceList
