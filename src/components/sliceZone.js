import React from 'react'
import Hero from '../components/hero'
import CallToActionGrid from '../components/CallToActionGrid'
import PriceList from '../components/PriceList'

function SliceZone({ body }) {
    console.log(body)
    return (
        <div>
            {body.map((bodyContent, i) => {
                if (bodyContent.type === 'hero') {
                    return <Hero
                        key={i}
                        title={bodyContent.primary.hero_title}
                        content={bodyContent.primary.hero_content}
                        backgroundImage={bodyContent.primary.background_image.url} />
                } else if (bodyContent.type === 'call_to_action_grid') {
                    return <CallToActionGrid
                        key={i}
                        callToActions={bodyContent.fields}
                        title={bodyContent.primary.section_title} />
                } else if (bodyContent.type === 'price_list') {
                    return <PriceList key={i} title={bodyContent.primary.title} prices={bodyContent.fields} />
                }

                else {
                    return null;
                }
            })}
            {/* <h2>hero</h2> */}
        </div>
    )
}

export default SliceZone
