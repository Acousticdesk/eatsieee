import React from 'react';


export default ({isShown, onClick}) => {
  return isShown ? <div onClick={onClick} className="l-side-menu skin">I am a side menu!</div> : null;
};
