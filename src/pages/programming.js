import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Programming = (props) => (
    <Layout>
        <Helmet>
            <title>My Programming Portfolio</title>
            <meta name="description" content="My programming portfolio" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>My Programming Portfolio</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>I'm still working on building this website, but in the meantime, <a href="https://docs.google.com/document/d/1JXySsKgIbtZjvvxsk87-tYGqD8lYd_vZKC7iP-1iSUs/edit?usp=sharing"> here's a link to a summary of my programming portfolio.</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Programming