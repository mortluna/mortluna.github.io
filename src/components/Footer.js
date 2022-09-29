import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <h2>Contact</h2>
            <ul className="icons">
                <li><a href="mailto:mortluna@umich.edu?" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="https://www.instagram.com/mars_ortizlu/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/mortluna" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/mariana-ortiz-luna-b36217184/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; mortluna</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
