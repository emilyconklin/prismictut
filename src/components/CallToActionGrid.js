import React from 'react'
import styled from 'styled-components'
import RichText from '../components/richText'
import CTAblock from '../components/CTAblock'

const CallToActionGridWrapper = styled.section`
max-width: 800px;
margin: 0 auto;`

function CallToActionGrid({title, callToActions}) {
    return (
        <CallToActionGridWrapper>
           <RichText render={title}/>
           {callToActions.map((CTA, i) =>{
                return (
                    <CTAblock
                    btnLabel={CTA.button_label} 
                    btnDestination={`/${CTA.button_destination._meta.uid}`}
                    title={CTA.call_to_action_title}
                    content={CTA.content}
                    image={CTA.featured_image.url}
                    key={i}/>
                )
           })}
       </CallToActionGridWrapper>
    )
}

export default CallToActionGrid
