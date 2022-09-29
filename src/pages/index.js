import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import honors from '../assets/images/honors.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Mariana Ortiz Luna"
                    meta={[
                        { name: 'description', content: 'This is the personal website for Mariana Ortiz Luna' },
                        { name: 'keywords', content: 'porfolio, personal website, software development' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>About Me</h3>
                                <p>Background and Goals</p>
                            </header>
                            <Link to="/aboutme" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>My Art Things</h3>
                                <p>Short summary of my portfolio</p>
                            </header>
                            <Link to="https://mortluna.myportfolio.com/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>My Programming Things</h3>
                                <p>commit to git like git commits to you</p>
                            </header>
                            <Link to="/programming" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>My Game Things</h3>
                                <p>a few games i've had the pleasure to work on</p>
                            </header>
                            <Link to="/games" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>STEM Education</h3>
                                <p>teaching and curriculum experience</p>
                            </header>
                            <Link to="/stem_education" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${honors})`}}>
                            <header className="major">
                                <h3>MPortfolio</h3>
                                <p>For the Engineering Honors Program</p>
                            </header>
                            <Link to="/mportfolio" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Thanks for reading!</h2>
                            </header>
                            <p>To be human is to create, to move forward and innovate in ways no
                            one has thought about before. I believe to truly continue improving
                            and moving forward with art and technology, we as groundbreakers
                            must commit to originality and inclusivity. Part of this means
                            diversity of experiences, and I believe I bring a unique perspective
                            to many problems. I'm a quick thinker and I love to analyze
                            concepts and situations to determine the best course of action.
                                If you're interested in talking about any of my work, my contact info is below!</p>
                            <ul className="actions">
                                <li><Link to="/aboutme" className="button next">Learn more</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex