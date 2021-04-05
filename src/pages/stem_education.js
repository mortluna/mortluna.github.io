import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Education = (props) => (
    <Layout>
        <Helmet>
            <title>STEM Education</title>
            <meta name="description" content="STEM Education" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>STEM Education</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>I'm still working on building this website, but you can find the short list
                    of STEM projects I initiated or worked for on my <a href="https://www.linkedin.com/in/mariana-ortiz-luna-b36217184/">LinkedIn</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Education