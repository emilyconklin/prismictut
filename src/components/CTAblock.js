import React from 'react'
import RichText from '../components/richText'
import styled from 'styled-components'
import { Link } from 'gatsby'

const CTAwrapper = styled.section`
padding:20px;
background: #eee;
border-radius: 20px;
margin: 20px 0;

.ctacontent {
    display: flex;
    .imgwrap {
        margin: auto 10px;
        background: white;
        border-radius: 10px;
        padding: 10px;
    }
    img {
        max-width: 100px;
    }
}
`

const Btn = styled.div`
background: orange;
display: inline-block;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;
a {
    color: white;
    text-decoration: none;
}`

function CTAblock({ content, title, btnLabel, btnDestination, image }) {
    return (
        <CTAwrapper>
            <RichText render={title} />
            <div className="ctacontent">

                <RichText render={content} />
                <div className="imgwrap">
                    <img src={image} alt='featured' /></div>
            </div>

            <Btn><Link to={btnDestination}>{btnLabel}</Link></Btn>

        </CTAwrapper>
    )
}

export default CTAblock
