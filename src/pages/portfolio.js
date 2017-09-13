import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Project = (props) => (
	<li>
		<h2><a href="#">{props.projectName}</a></h2>
		<p>{props.description}</p>
	</li>
)

const ProjectsPage = (props) => (
  <div>
  	<Helmet
      title="My Projects | Cormac McCann"
    />
  	<div className="content-container portfolio-content">
    	<h1>Portfolio</h1>
    	<p>Here are some projects I have worked on both personally and profressionally. I try to have a wide variety.</p>
    	<ul className="projects-list clean-list">
    		<Project projectName="Gambling.com" description="The flagship domain for KAX media." />
    		<Project projectName="PWA Demo" description="A small PWA demo I created to convey the plus sides of using a PWA over a Native Application" />
    	</ul>
  	</div>
  </div>
)

export default ProjectsPage