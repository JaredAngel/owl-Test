import React from 'react';

function Participants(props) {

  const participant = props.participants(person => {
    let stage = ""
    if (person.onStage) {
      stage = "onstage"
    }

    return (
    <div className='person'>
      <div className="name">
        {person.name}
        {stage}
      </div>

      <div className="avatar">
        {person.avatar}
      </div>
    </div>)
  })

  return (<div className="participant">
    {participant}
  </div>);
}

export default {
  Participants
};