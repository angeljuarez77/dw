import React from 'react';

function Elections(props) {
  // to avoid "can't use map function on value null error" react throws
  function nullCheck() {
    if(!props.elections) {
      return <p>Loading...</p>
    }

    return props.elections.map(election => {
      return (
        <div className="election">
          <h1>{ election.description }</h1>
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Upcoming elections</h1>
      { nullCheck() }
    </div>
  );
};

export default Elections;