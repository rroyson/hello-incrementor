import React from 'react'

const OptionButton = props => {
  const backgroundColor = props.selectedValue === props.value
    ? 'bg-light-blue'
    : 'bg-white'

  const textColor = props.selectedValue === props.value ? 'white' : 'black'

  return (
    <input
      className={`f6 fw2 mr2 b pa2 input-reset ba ${backgroundColor} ${textColor}`}
      type="button"
      name={props.name}
      id="unit"
      value={props.value}
      onClick={props.changeEvent}
    />
  )
}

export default OptionButton
