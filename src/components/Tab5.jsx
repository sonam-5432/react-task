import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

const Tab5 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <Box sx={{ p: 3, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount1(count1 + 1)}
        sx={{ mr: 2 }}
      >
        Button 1: {count1}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount2(count2 + 1)}
      >
        Button 2: {count2}
      </Button>
    </Box>
  );
};

export default Tab5;