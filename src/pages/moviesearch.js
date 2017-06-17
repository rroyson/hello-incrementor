import React from 'react'
import MedicationAdd from '../containers/medicationAdd'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'
import OptionButton from '../components/optionButton'
import MovieSearch from '../containers/movieSearch'

const Movies = props => {
  return (
    <div className="bold pa3 pb0">
      <Header />
      <Nav />
      <MovieSearch />
      <h2>Search Movies</h2>
      <Footer />

    </div>
  )
}
export default Movies
