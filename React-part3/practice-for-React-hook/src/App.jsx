import  { useState } from 'react';


function App() {
  // Using useState to create a state variable called 'topics' and a function to update it
  const [topics, setTopics] = useState([]);

  // Function to add a new topic
  const addTopic = () => {
    const newTopic = `Topic ${topics.length + 1}`;
    // Update the state by adding the new topic
    setTopics([...topics, newTopic]);
  };

  return (
    <div>
      {/* Title of the list */}
      <h2>List of Topics</h2>

      {/* List items */}
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      {/* Button to add a new topic */}
      <button onClick={addTopic}>
        Add New Topic
      </button>
    </div>
  );
}

export default App;
