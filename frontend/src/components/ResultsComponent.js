import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const ResultsComponent = ({ results }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!results) return null;

  const { data, meta } = results;

  if (!data || !data.attributes || !data.attributes.stats) return null;

  const { stats } = data.attributes;

  // Convert stats object into an array of objects for easier mapping
  const statsArray = [
    { category: 'Inofensivo', count: stats.harmless },
    { category: 'Malicioso', count: stats.malicious },
    { category: 'Sospechoso', count: stats.suspicious },
    { category: 'Tiempo de espera', count: stats.timeout },
    { category: 'No detectado', count: stats.undetected }
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Resultado de Analisis
          </Typography>
          <TableContainer sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Categoria</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {statsArray.map((stat, index) => (
                  <TableRow key={index}>
                    <TableCell>{stat.category}</TableCell>
                    <TableCell align="right">{stat.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Ocultar detalles' : 'Mostrar Detalles'}
        </Button>
        {isExpanded && (
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Detalles de analisis
              </Typography>
              <Typography variant="body2" component="pre" sx={{ mt: 2 }}>
                {JSON.stringify(data, null, 2)}
              </Typography>
              <Typography variant="body2" component="pre" sx={{ mt: 2 }}>
                {JSON.stringify(meta, null, 2)}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ResultsComponent;
