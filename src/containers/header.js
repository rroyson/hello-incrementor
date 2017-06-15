import React from 'react'
import { Link } from 'react-router-dom'
import Hello from './hello'

export default props => {
  return (
    <div className="pa1 tc ml1 dark-gray bg-washed-green  f6 fw1 i link avenir">
      <a className="link" href="https://github.com/rroyson">
        DOPE APPS!!
      </a>
      <Hello firstName="Pate" />
    </div>
  )
}
