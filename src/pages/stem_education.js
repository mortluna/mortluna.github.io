import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import pic08 from '../assets/images/pic08.jpg'

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
            <section id="two" className="spotlights">
                <section>
                    <Link to="/stem_education" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>codeConnects Python Instructor</h3>
                            </header>
                            <ul>
                                <li>Planned, coordinated, and executed activities with students over eight-week and full-year Python programs for a nonprofit 501(c)(3) organization that aims to empower the next generation through computer science education</li>
                                <li>Taught students from generally unrepresented communities in STEM, particularly students of color and girls</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/stem_education" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Baldwin Center Computer Summer Camp</h3>
                            </header>
                            <ul>
                                <li>Founded and ensured the annual continuation of a computer summer camp for 3rd grade to 8th grade students at a local soup kitchen and distribution center</li>
                                <li>Developed a strong, hands-on curriculum including Digital Citizenship, Encryption, Computer Aided Design, and programming, and engaged with and gave resources to students interested in more</li>
                                <li>Communicated with The Baldwin Center, volunteer camp counselors, and other groups running camps to facilitate a well-planned, smooth event and an inclusive learning environment</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Education