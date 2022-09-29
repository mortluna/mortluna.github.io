import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import pic09 from '../assets/images/pic09.jpg'

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
                    <p>I'm still working on building this website, but in the 
                        meantime, <a href="https://docs.google.com/document/d/1JXySsKgIbtZjvvxsk87-tYGqD8lYd_vZKC7iP-1iSUs/edit?usp=sharing"> here's a link to a summary of my programming portfolio.</a></p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <h2>C++</h2>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Description</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Piazza Post Classifier</td>
                                    <td>Using a bag of words model for features, I developed a simplified version of a Multi-Variate Bernoulli Naive Bayes Classifier to predict what project a Piazza post was referring to.</td>
                                    <td>2020</td>
                                </tr>
                                <tr>
                                    <td>Item1</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <h2>Python</h2>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Description</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Item1</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>2020</td>
                                </tr>
                                <tr>
                                    <td>Item1</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="four">
                <div className="inner">
                    <h2>C++</h2>
                    <p><span className="image left"><img src={pic09} alt="" /></span>This was a 
                         project I worked on with various other people.<br /></p>


                </div>
                <div className="inner">
                    <h2>MATLAB</h2>
                    <p><span className="image left"><img src={pic09} alt="" /></span>This was a
                         project I worked on with various other people.</p>


                </div>
                <div className="inner">
                    <h2>Python</h2>
                    <p><span className="image left"><img src={pic09} alt="" /></span>This was a
                         project I worked on with various other people.</p>


                </div>
                <div className="inner">
                    <h2>Arduino</h2>
                    <p><span className="image left"><img src={pic09} alt="" /></span>This was a
                         project I worked on with various other people.</p>


                </div>
                <div className="inner">
                    <h2>Other</h2>
                    <p><span className="image left"><img src={pic09} alt="" /></span>This was a
                         project I worked on with various other people.</p>


                </div>
            </section>
        </div>

    </Layout>
)

export default Programming