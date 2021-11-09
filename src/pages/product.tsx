
import React from "react"
import { Router } from "@reach/router"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import ProductOne from "../components/product1";
import ProductTwo from "../components/product2";
import Main from "../components/main"

const product = () => {
  return (
    <Layout>
        <h1>Look Products</h1>
        <div>
            <Link to="/product/page1">Product 1</Link>
            <br/>
            <Link to="/product/page2">Product 2</Link>
            </div>
      <Router basepath="/product">
        <ProductOne path="/page1" />
        <ProductTwo path="/page2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default product;