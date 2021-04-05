import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Awards = (props) => (
    <Layout>
        <Helmet>
            <title>Awards</title>
            <meta name="description" content="Awards" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Awards and Achievements</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>My website is still under construction, but you can find the short list
                    of awards I received on my <a href="https://www.linkedin.com/in/mariana-ortiz-luna-b36217184/">LinkedIn</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Awards