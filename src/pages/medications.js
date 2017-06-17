import React from 'react'
import MedicationAdd from '../containers/medicationAdd'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'
import OptionButton from '../components/optionButton'

const Medications = props =>
  <div className="bold pa3 pb0">
    <Header />
    <Nav />
    <MedicationAdd />
    <h2>Add a Medication</h2>
    <Footer />

  </div>

export default Medications
