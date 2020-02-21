import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Stephen, a software tester in beautiful Cork.</h2>
            <p>Need a tester? <Link to="/contact">Contact me</Link> </p>
        </Layout>
    )
}

export default IndexPage
