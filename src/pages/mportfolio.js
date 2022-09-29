import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

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
                        <li><span className="button small disabled">Prev</span></li>
                        <li><a href="#" className="page active">SMART Goals</a></li>
                        <li><a href="/mportfolio2" className="page">Focus Area and Capstone</a></li>
                        <li><a href="/mportfolio3" className="page">Engineering Core Competencies</a></li>
                        <li><a href="/mportfolio4" className="page">Personal Philosophy</a></li>
                        <li><a href="/mportfolio2" className="button small">Next</a></li>
                    </ul>

                    <h2>SMART Goals</h2>
                    <ul>
                        <li>I will reach out to friends and family at least once a day to stay connected and socialize outside of school. I will also eat at least 3 meals a day and start including more snacks in my diet to the end of gaining at least 5 lbs by the end of the semester. I will also try to get a minimum of 7 hours of sleep every night.</li>
                        <li>I want to do the EECS 445 homework 9 days early, and study 2 hours a day in the week leading up to the midterm and final to the end of doing well in EECS 445, an important course for my career.</li>
                        <li>I will work on building the MFabrication Virtual Hub for at least 3 hours every week until the end of the semester so the application is ready to use for Winter 2022 Recruiting and general club use.</li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default COEHonors