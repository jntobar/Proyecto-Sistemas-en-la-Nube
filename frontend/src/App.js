// src/App.js
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ResultsComponent from './components/ResultsComponent';
import HistoryComponent from './components/HistoryComponent';

const App = () => {
  const [results, setResults] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAnalyze = (data) => {
    setResults(data);
    setHistory([...history, data.url]);
  };

  return (
    <div>
      <h1>URL Analysis</h1>
      <FormComponent onAnalyze={handleAnalyze} />
      <ResultsComponent results={results} />
      <HistoryComponent history={history} />
    </div>
  );
};

export default App;
