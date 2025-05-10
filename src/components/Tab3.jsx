import React, { useState } from 'react';
import { Box, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const Tab3 = () => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState([]);

  const handleTask = () => {
    const result = [];
    const recursiveFunction = (count) => {
      if (count > 0) {
        result.push('Hello Task');
        recursiveFunction(count - 1);
      } else {
        result.push('STOP');
      }
    };
    recursiveFunction(Number(input));
    setOutput(result);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
          label="Input"
          variant="outlined"
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleTask}>
          Run Task
        </Button>
      </Box>
      <Box>
        <List>
          {output.map((line, index) => (
            <ListItem key={index}>
              <ListItemText primary={line} sx={{ textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Tab3;