import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Games = (props) => (
    <Layout>
        <Helmet>
            <title>My Games Portfolio</title>
            <meta name="description" content="My games portfolio" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>My Games Portfolio</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>I'm still working on building this website, but <a href="https://wolverinesoft-studio.itch.io/desolation-place"> here is a link to Desolation Place,</a> for which I developed art assets
                        for and I will post a link to Darwin, a game I developed on the Godot 
                        Engine, when it becomes open source.
                        </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Games