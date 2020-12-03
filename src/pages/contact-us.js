import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import RichText from '../components/richText'
import styled from 'styled-components'

export const query = graphql`
{
    prismic {
      allContact_pages {
        edges {
          node {
            form_title
            form_desc
            fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }`

const Form = styled.form`
padding: 10px;
background: #eee;
max-width: 800px;
margin:2.5rem auto;`

const Button = styled.button`
padding: 4px 8px;
background: orange;
color: white;
box-shadow: none;
border-radius: 4px;
cursor: pointer;`


function ContactUs(props) {
  console.log(props)
  return (
    <div>
      <Layout>
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_title}/>
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_desc}/>
        <Form onSubmit={e => e.preventDefault}>
          {props.data.prismic.allContact_pages.edges[0].node.fields.map((field, i) => {
            // return (
            //     <div
            //         key={i}>wooo</div>
            // )
            if (field.field_type === 'text area') {
              return (<div key={i}><textarea
                required={field.required === 'yes'}
                placeholder={field.field_name}
              />
              </div>
              )
            } else {
              return (<div key={i}><input
                required={field.required === 'yes'}
                type={field.field_type}
                placeholder={field.field_name} />
              </div>
              )
            }
          })}
          <Button type="submit">Submit</Button>
        </Form>
      </Layout>
    </div>
  )
}

export default ContactUs
