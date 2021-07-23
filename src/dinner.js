import React from 'react';

function Dinner (props) {
  return (
    <div>
      <h1>Today , We are Serving <b>{props.dish}</b></h1>
    </div>
  )
}

export default Dinner;