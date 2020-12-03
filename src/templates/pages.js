import React from 'react'
import {graphql} from 'gatsby'
import RichText from '../components/richText'
import Layout from '../components/layout'
import SliceZone from '../components/sliceZone'


export const query = graphql`
query PageQuery($id: String){
    prismic {
      allPages(id: $id) {
        edges {
          node {
            body {
              ... on PRISMIC_PageBodyCall_to_action_grid {
                type
                label
                primary {
                  section_title
                }
                fields {
                  button_destination {
                    ... on PRISMIC_Contact_page {
                      _meta {
                        uid
                      }
                    }
                  }
                  button_label
                  call_to_action_title
                  content
                  featured_image
                }
              }
            }
              page_title
              content
            _meta {
              uid
              id
            }
          }
        }
      }
    }
  }
  `

function pages(props) {
    console.log(props)

    const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
    const pageContent = props.data.prismic.allPages.edges[0].node.content;
    return (
        <Layout>
            <RichText render={pageTitle}/>
            <RichText render={pageContent}/>
            {!!props.data.prismic.allPages.edges[0].node.body && <SliceZone body={props.data.prismic.allPages.edges[0].node.body}/>}
           
        </Layout>
    )
}

export default pages
