import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Tab4 = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedList = localStorage.getItem('todoList');
    return savedList ? JSON.parse(savedList) : [];
  });
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      const updatedList = [...todoList, input];
      setTodoList(updatedList);
      localStorage.setItem('todoList', JSON.stringify(updatedList));
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
    localStorage.setItem('todoList', JSON.stringify(updatedList));
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          variant="outlined"
          label="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add
        </Button>
      </Box>
      <List>
        {todoList.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" color="error" onClick={() => removeTodo(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Tab4;