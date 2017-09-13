import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const AboutPage = () => (
  <div>
  	<Helmet
      title="About me | Cormac McCann"
    />
  	<div className="content-container about-content">
    	<h1>Hey there, I'm Cormac.</h1>
    	<p>
        I'm a part of the development team over at KAX media, currently working on <a href="#">Gambling.com. </a> 
        I'm respinsible for maintanence, adding new features and updating old ones. 
        I take on small manageable freelance gigs in my spare time, for projects that seem like they would be 
        a challenge or if I find the idea interesting enough. My aim is to learn something new with every project. 
        My career began when I left university to persue web development full time in 2015. Since then I have taken on 
        roles in start up companies, worked full-time freelance before landing in my current roll. 
    	</p>
      <p>
        Outside of work I enjoy music, playing guitar/bass for over ten years, I love gaming, both video and table top, I'm currently learning how to improve my digital art and I'm constantly looking for bad movies to cringe at.
      </p>
      <p>
        If any of that interests you and you'd like to get in touch, please don't hesitate to <a href="mailto:fluffykinsjs@gmail.com" class="email">email me!</a>
      </p>
    </div>
  </div>
)

export default AboutPage