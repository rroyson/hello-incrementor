import React from 'react'

/*
function Title(props) {
  return <h1>{props.children}</h1>
}
export default Title
*/

export default props =>
  <h1 className="mt1 pa2 tc bg-green avenir f1 fw2">{props.children}</h1>
