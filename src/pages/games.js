import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import pic13 from '../assets/images/pic13.png'
import pic04 from '../assets/images/pic04.jpg'

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
                        for and I will post a link to Darwin, a game I developed on the Godot Engine, when it becomes open source.</p>
                    <p><a href="https://wolverinesoft-studio.itch.io/caduceus">Here is a link to Cadeuceus</a> where I developed the XP System, collaborated on the Player Death System, and assisted with VFX.</p>
                    <p><a href="https://store.steampowered.com/app/2074700/Bloom_Roots_of_Renewal/">Here is a link to Bloom: Roots of Renewal</a> for which I was co-Art Department Lead, managing the creation, implementation, and style of art assets.</p>
                    <p><a href="https://wolverinesoft-studio.itch.io/project-light-prototype">Here is a link to Project Light</a> where I was Art Department Lead, making tasks for a new prototype project.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/games" className="image">
                        <img src={pic04} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>WolverineSoft Studio Artist and Unity Developer</h3>
                            </header>
                            <ul>
                                <li>Created fully developed video games in agile development with highly multidisciplinary teams, completing weekly sprints tracked in Jira, and maintaining clear programming and systems documentation in Confluence</li>
                                <li>Produced 3D and 2D art assets in Blender for Summer 2020 Studio for 3D single player game Desolation Place</li>
                                <li>Unity developer for Winter 2021 Studio developing VFX and Player XP/Health systems for 3D FPS Caduceus</li>
                                <li>Art Department Lead for Fall 2021 Studio making assets, merging pull requests, and directing art style for 3D FPS Bloom</li>
                            </ul>

                        </div>
                    </div>
                </section>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/games" className="image">
                        <img src={pic13} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>EECS 494: Introduction to Video Game Development</h3>
                            </header>
                            <ul>
                                <li>Project 1</li>
                                
                            </ul>

                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Games