import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'
import Incr from '../containers/incr'

const Incrementor = props => {
  return (
    <div className="bold ">
      <Header />
      <Nav />
      <Title>Incrementor</Title>
      <Incr initialValue={100} incrementor={1} decrementor={1} />
      <Footer />
    </div>
  )
}

export default Incrementor
