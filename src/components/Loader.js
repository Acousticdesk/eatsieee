import React from 'react';

export default function Loader ({isLoading}) {
  return (
    <React.Fragment>
      {isLoading ?
        <div className="loader"/> :
        null}
    </React.Fragment>
  );
}
