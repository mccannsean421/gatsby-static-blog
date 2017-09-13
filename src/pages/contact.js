import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const ContactPage = () => (
  <div>
  	<Helmet
      title="Contact me | Cormac McCann"
    />
  	<div className="content-container contact-content">
    	<h1>Contact</h1>
      <p>
    		If you want to get in touch for a project or even just to chat, feel free to mail me at <a href="mailto:fluffykinsjs@gmail.com" class="email">fluffykinsjs@gmail.com</a>
    	</p>
    </div>
  </div>
)

export default ContactPage