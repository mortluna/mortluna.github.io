import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:mortluna@umich.edu?">mortluna@umich.edu</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(248) 792-1010</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>906 S University Ave<br />
                        Ann Arbor, MI 48390<br />
                        United States of America</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
