import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Nav = () => (
  <div>
    <div className="navigation">
      
      <div className="overlay"></div>
      <Link className="home-link" to="/">
        <span>CM</span>
      </Link>
    
      <ul className="clean-list inline-list nav-list">
        <li className="about">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="projects">
          <Link to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="blog">
          <Link to="/blog">
            Blog
          </Link>
        </li>
        <li className="contact">
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

const Footer = () => (
  <div>
    <footer>
      <span>You can find me at:</span>
      <ul className="clean-list inline-list footer-list">
        <li>
          <a href="https://github.com/mccannsean421" className="github" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cormac-mccann-70052283/" className="linkedin" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/FluffykinsJS?lang=en" className="twitter" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/?hl=en" className="instagram" target="_blank">Instagram</a>
        </li>
        <li>
          <a href="https://codepen.io/mccannsean421/" className="codepen" target="_blank">Codepen</a>
        </li>
      </ul>
    </footer>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Web Developer| Cormac McCann"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav />
    <div>
      {children()}
    </div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
