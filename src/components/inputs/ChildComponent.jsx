import React from 'react';

const ChildComponent = ({ value, RModel }) => {
  return (
    <div>
      <input
        type="text"
        value={value} // Value is set based on the parent's state
        onChange={RModel} // Call the callback function to update the parent's state
        placeholder="Type something..."
      />
    </div>
  );
};

export default ChildComponent;