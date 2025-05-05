import React, { useState } from 'react';
import ApiService from '../service/ApiService';

export default function InputText({ label, onChange }) {
  const [inputData, setInputData] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const result = await ApiService.postData('/your-endpoint', { data: inputData });
      setResponse(result);
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>}
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter data"
        style={{
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
          <button onClick={handleSubmit}>Send</button>
          {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  );
}


/*
// Example usage:
export default function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <InputText
        label="Your Name"
        placeholder="Enter your name"
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>

    </div>
  );
}
  */
  
  /*
  // Inside React component when backend api in docker container:
async function sendData(input) {
  const response = await fetch('http://localhost:5000/api/process', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inputData: input }),
  });
  const result = await response.json();
  // handle result
}
  */