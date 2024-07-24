import React, { useState } from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import FormComponent from './components/FormComponent';
import ResultsComponent from './components/ResultsComponent';
import HistoryComponent from './components/HistoryComponent';

const App = () => {
  const [results, setResults] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAnalyze = (data) => {
    setResults(data);
    setHistory([...history, data.meta.url_info.url]);
  };

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" component="h1" gutterBottom>
        URL Analysis
      </Typography>
      <FormComponent onAnalyze={handleAnalyze} />
      <ResultsComponent results={results} />
      <HistoryComponent history={history} />
    </Container>
  );
};

export default App;
