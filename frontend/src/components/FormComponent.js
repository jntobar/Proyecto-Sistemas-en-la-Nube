import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const FormComponent = ({ onAnalyze }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      
      const response = await axios.post('/analyze', { url });
      onAnalyze(response.data);
    } catch (error) {
      console.error('Error analyzing URL:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <TextField
        label="Enter URL to analyze"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </Button>
    </Box>
  );
};

export default FormComponent;
