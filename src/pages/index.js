import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>FIRST PAGE</h1>
    <Link to="/page-2">Go to page 2</Link>
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea odio quasi
    corporis aperiam ad! Laudantium molestiae maiores consectetur fugit magni?
    Facilis, repellat? Consectetur quisquam quae maxime deserunt nesciunt aut
    ullam culpa, cupiditate in deleniti sit voluptate, porro quam voluptas earum
    assumenda. Possimus porro magni autem voluptatem doloribus dolorum alias!
  </Layout>
);

export default IndexPage;
