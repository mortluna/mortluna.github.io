import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Mariana - About Me</title>
            <meta name="description" content="About Me" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Background and current projects</h2>
                    </header>
                    <p>My name is Mariana Ortiz Luna, a sophomore at the University of Michigan, looking to graduate
                    in Fall 2022. I went to high school at Notre Dame Prep where I took on leadership roles from
                    President of the Computer Club to President of Anime Club and many things in between. I also had the opportunity to be a part of
                    the Yale Young Global Scholars Beijing Program and attend summer courses at Carnegie Mellon
                    University. By far however, the most important project to me then was working with mt FIRST 
                    Robotics Competition team, FRC 33 Killer Bees Robotics, more details you can find on my programming page :).</p>
                    <p>In college I started off by finding a research project that related to my interest in both
                    social media research and data science, and I began working with Dr. Paramveer Dhillon
                    in the School of Information on doing Reddit Data Analysis. Firstly, I assisted in doing thorough
                    literature review to help develop a research question, and then we proceeded to experiment using
                    certain methods with the Cornell Movie Dialogue Corpus and word2vec in Python. I declared Computer Science
                    in the College of Engineering and a minor in Statistics through U of M's LSA department, as I'm very
                        interested in data analysis and data science.
                        </p>
                    <p>I also have two dogs who will always be puppies in my eyes.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Why am I passionate about work?</h3>
                            </header>
                            <p>My primary concern with all the work I do is that it requires creative thinking
                            and will have a real effect for people. I work diligently on things that I'm
                            passionate about and really enjoy working with others towards a common goal.
                                Innovation and originality always play into my projects.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What are some of my results?</h3>
                            </header>
                            <ul>
                                <li>Many District wins in FRC, as well as state subdivision wins and
                                    world's appearances with a robust, industrial-grade robot</li>
                                <li>A quantitative measure of a qualitative problem when looking at gender
                                    bias in movies</li>
                                <li>Assets for a successful launch of a really neat video game</li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What am I looking for now?</h3>
                            </header>
                            <p>Currently, I am looking for opportunities that I can not only contribute significantly
                            to, but also allow me to meet others and be on a team. I'm currently working on a
                            few projects, including being a programmer on another game with WolverineSoft studio,
                            creating and adding content to this website, creating an app with the Spotify API to
                            put on this website (working with user data and predictive methods), improving my front-end
                            and back-end development skills, and creating a virtual hub as part of the MFabrication
                                initiative. And of course, school :)</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing