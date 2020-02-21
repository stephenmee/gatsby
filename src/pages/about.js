import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently work full time as a test engineer in Poppulo.</p>
            <p><Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage