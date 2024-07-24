import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const HistoryComponent = ({ history }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" component="h3">
        Historial
      </Typography>
      <List>
        {history.map((url, index) => (
          <ListItem key={index}>
            <ListItemText primary={url} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HistoryComponent;
