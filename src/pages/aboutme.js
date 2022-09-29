import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic12 from '../assets/images/pic12.jpg'

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
                        <h2>Background</h2>
                    </header>
                    <p><span className="image left"><img src={pic12} alt="" /></span>
                    Mariana Sofia Ortiz Luna, a third-year student studying Computer Science
                        and statistics at the University of Michigan's
                        College of Engineering, looking to graduate
                        in Winter 2023. Born in Toluca, Estado de Mexico, lived in Michigan for
                        15 years.
                        Passionate about writing stories with data and sharing them
                        for the betterment of the system it came from.</p>
                </div>
            </section>
            <section id="oneandahalf">
                <div className="inner">
                    <header className="major">
                        <h2>Personal Philosophy</h2>
                    </header>
                    <p>My life vision is to use my problem solving skills and technical expertise to aid and
                        guide people towards solutions that improve the wellbeing of communities everywhere. I believe the
                        deconstruction of complexity and systems can drive processes towards their peak potential. I also
                        believe analysis is at the core of this complexity, and taking apart data to its basic foundations allows
                        us to write a story about the happenings of the world. Through this deconstruction and analysis, we can
                        begin to truly understand problems at their core and work to improve them from the ground roots up.
                        By extension, I feel that I would like to see a world where people are secure in their primary needs and
                        can take steps to achieve a measure of self-actualization, and that this cannot happen without support from their personal, local, national, and global communities.</p>
                    <p>Feldman's Model of Art Criticism requires four main components: description, analysis, interpretation, and
                        judgement. Used for the thorough critique of a work of art, this model allows one to examine and evaluate
                        complex subjects. Interestingly, the model also reflects the design process for technology: defining the
                        problem, collecting and analyzing information, developing solutions and getting feedback, and improving
                        the design. It can be very easy to separate the world of art from the world of STEM using rhetoric of
                        left-brained activities versus right-brained activities. Yet, it has become increasingly clear that these
                        two branches of knowledge tangle with each other in incredible ways, where intersectionality allows for the greater enhancement of both. </p>
                    <p>My work as an artist has always tangled with my work as a software developer. I have had the pleasure of
                        working with many multidisciplinary teams throughout my career, especially those involving video game
                        development or machine learning research. It has been such a joy to be able to apply creativity to projects
                        as a 3D artist and Unity programmer in WolverineSoft Studio, working in agile development and making really
                        cool products. I have also had the opportunity to work with DTE Energy as a Data Science SWE Co-Op, giving
                        me strong experience working with the energy industry on a team with highly talented engineers to provide
                        Southeast Michigan with reliable power throughout the year.</p>
                    <p>This value of analysis and creation has been instilled in me by the innovative, intelligent, and thoughtful people
                        I've been able to work with, and being able to learn with and by them energizes and motivates my work every day. 
                        I hope to continue being able to contribute to the communities important to me, and it is my wish that my
                        future career will be able to impact people in highly positive ways, whether this be through technology or
                        culture. I look forward to these future opportunities with excitement and vigor.</p>
                    <p>"For still there are so many things that I have never seen: in every wood in every spring there is a different green." - J. R. R. Tolkien</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/#" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Research Assistant, 20th Century Movie Bias</h3>
                            </header>
                            <ul>
                                <li>Synthesized and documented extensive literature review from the ALC/ACM conferences in meta-research phase</li>
                                <li>Evaluated, tested, and implemented NLP (natural language processing) methods to quantify gender bias in occupations
                                    across the Cornell Movie Dialogue Corpus using pandas, scipy, gensim and word2vec in Python</li>
                                <li>Experimented with the usage of similar methods to working with the study of large-scale Reddit data</li>
                                <li>Investigated and discovered relationships between women's occupation in movies and the association of that occupation with gender biases</li>
                                <li>Explored the idea of applying quantitative solutions to qualitative problems in a variety of disciplines</li>
                            </ul>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/#" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>DTE Data Science Co-Op</h3>
                            </header>
                            <ul>
                                <li>Initiated the analysis of Southeast Michigan’s electric grid AC network using geocoding, RegEx, and Levenstein distance string matching as part of an initiative to correctly map customer meters to transformers and circuits</li>
                                <li>Designed and ran experiments to evaluate the voltage change required to detect connectivity errors in a subarea</li>
                                <li>Ran voltage simulations over the Detroit area grid and used daily voltage readings to pick out meters using correlation heatmaps and predictive linear regression; verified results with ANOVA score testing for significance</li>
                                <li>Began conversations with a few SME’s and an engineering department about the implementation of these voltage simulation experiments on the field, using both predicted voltage change and physical meter properties</li>
                                <li>Implemented a hierarchical agglomerative clustering algorithm to find subareas of meters as an ML verifier</li>
                                <li>Standardized the team’s process for documenting and executing data science projects, allowing for concise reports to team supervisors and clients/stakeholders, as well as clear communication with non-technical teams</li>
                            </ul>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/#" className="image">
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
                                <li><a href="https://drive.google.com/file/d/1gjZQemMbEpW8aWCEIHTF0wF_qAiq09DG/view?usp=sharing" className="button">My Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing