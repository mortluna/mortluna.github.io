import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import ecomp from '../assets/images/ecomp.png'

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
                        <li><a href="/mportfolio2" className="button small">Prev</a></li>
                        <li><a href="/mportfolio" className="page">SMART Goals</a></li>
                        <li><a href="/mportfolio2" className="page">Focus Area and Capstone</a></li>
                        <li><a href="/mportfolio3" className="page">Engineering Core Competencies</a></li>
                        <li><a href="#" className="page active">Personal Philosophy</a></li>
                        <li><span className="button small disabled">Next</span></li>
                    </ul>

                    <h2>Personal Philosophy</h2>
                    <p>&emsp;My life vision is to use my problem solving skills and technical expertise to aid and guide people towards solutions that improve the wellbeing of communities everywhere. I believe the deconstruction of complexity and systems can drive processes towards their peak potential. I also believe analysis is at the core of this complexity, and taking apart data to its basic foundations allows us to write a story about the happenings of the world. Through this deconstruction and analysis, we can begin to truly understand problems at their core and work to improve them from the ground roots up. By extension, I feel that I would like to see a world where people are secure in their primary needs and can take steps to achieve a measure of self-actualization, and that this cannot happen without support from their personal, local, national, and global communities.<br /><br />
                        &emsp;Feldman's Model of Art Criticism requires four main components: description, analysis, interpretation, and judgement. Used for the thorough critique of a work of art, this model allows one to examine and evaluate complex subjects. Interestingly, the model also reflects the design process for technology: defining the problem, collecting and analyzing information, developing solutions and getting feedback, and improving the design. It can be very easy to separate the world of art from the world of STEM using rhetoric of left-brained activities versus right-brained activities. Yet, it has become increasingly clear that these two branches of knowledge tangle with each other in incredible ways, where intersectionality allows for the greater enhancement of both.<br /><br />
                        &emsp;My work as an artist has always tangled with my work as a software developer. I have had the pleasure of working with many multidisciplinary teams throughout my career, especially those involving video game development or machine learning research. It has been such a joy to be able to apply creativity to projects as a 3D artist and Unity programmer in WolverineSoft Studio, working in agile development and making really cool products. I have also had the opportunity to work with DTE Energy as a Data Science student SWE, giving me strong experience working with the energy industry on a team with highly talented engineers to provide Southeast Michigan with reliable power throughout the year.<br /><br />
                        &emsp;I hope to continue being able to contribute to the communities important to me, and it is my wish that my future career will be able to impact people in highly positive ways, whether this be through technology or culture. I look forward to these future opportunities with excitement and vigor.<br /><br />
                       &emsp;"For still there are so many things that I have never seen: in every wood in every spring there is a different green." - J. R. R. Tolkien</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default COEHonors