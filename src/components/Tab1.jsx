import React from 'react';
import { Box } from '@mui/material';

const Tab1 = () => {
  return (
    <Box sx={{ width: '100%', height: '500px', border: 'none' }}>
      <iframe
        src="https://www.wikipedia.org"
        title="Wikipedia"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </Box>
  );
};

export default Tab1;