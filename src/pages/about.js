import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'
import Cowbell from '../components/cowbell'

const About = props =>
  <div className="bold">
    <Header />
    <Nav />
    <Title>About</Title>
    <Cowbell />
    <Footer />

  </div>

export default About
