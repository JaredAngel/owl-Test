import React from 'react'


function Stage(props){ 

  let p = props.participants.map(function (person) {
    return (
      <div className='person-stage'>
        <h3>{person.name}</h3>
        <div className='person-icon'>
          <img src={person.avatar} alt={person.name} />
        </div>
      </div>
      );

  });


  return (
    <div className='stage'>
      {p}
    </div>
  );

}


export default Stage;