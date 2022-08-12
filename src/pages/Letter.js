import React from 'react';

const Letter = ({ children }) => {
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div
      className={hovered ? "rubberBand animated" : "rubberBand"}
      onMouseEnter={toggleHover}>
      {children}
    </div>
  );
};
export default Letter