import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import focusncap from '../assets/images/focusncap.png'

const COEHonors = (props) => (
    <Layout>
        <Helmet>
            <title>CoE Honors</title>
            <meta name="description" content="Awards" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>College of Engineering Honors Program Work</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>

                    <ul className="pagination">
                        <li><a href="/mportfolio" className="button small">Prev</a></li>
                        <li><a href="/mportfolio" className="page">SMART Goals</a></li>
                        <li><a href="#" className="page active">Focus Area and Capstone</a></li>
                        <li><a href="/mportfolio3" className="page">Engineering Core Competencies</a></li>
                        <li><a href="/mportfolio4" className="page">Personal Philosophy</a></li>
                        <li><a href="/mportfolio3" className="button small">Next</a></li>
                    </ul>

                    <h2>Focus Area and Capstone</h2>
                    <span className="image fit"><img src={focusncap} alt="" /></span>
                </div>
            </section>
        </div>

    </Layout>
)

export default COEHonors