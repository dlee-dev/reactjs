// Import React and the necessary components
import React, { useState } from 'react';

// Define a functional component called MyPage
function MyPage() {
  // Define a state variable using the useState hook
  const [counter, setCounter] = useState(0);

  // Define a function to handle the button click and update the counter
  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  // JSX structure of the component
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

// Export the component for use in other parts of the application
export default MyPage;