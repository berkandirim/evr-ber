import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const items = [
  {text: 'lorem', href:'#'},
  {text: 'ipsum', href:'#'},
  {text: 'dolor', href:'#'},
  {text: 'sit', href:'#'},
]

const IndexPage = () => (
  <Layout>
  <div className="menu">
    {
      items.map((item, i) => {
        return (
          <Link className="menu-item" to={item.href}>{item.text}</Link>
        )
      })
    }
  </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea odio quasi corporis aperiam ad! Laudantium molestiae maiores consectetur fugit magni? Facilis, repellat? Consectetur quisquam quae maxime deserunt nesciunt aut ullam culpa, cupiditate in deleniti sit voluptate, porro quam voluptas earum assumenda. Possimus porro magni autem voluptatem doloribus dolorum alias!
  </Layout>
)

export default IndexPage
