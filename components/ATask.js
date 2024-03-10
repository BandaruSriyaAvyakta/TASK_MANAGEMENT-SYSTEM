import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Input, FormHelperText, Button, CardContent, Typography } from '@mui/material';

const ATask = () => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [status, setStatus] = useState('To-do');
 const [dueDate, setDueDate] = useState('');
 const [timeTaken, setTimeTaken] = useState(''); // State for the time taken input
 const [error, setError] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      status,
      dueDate,
      timeTaken, // Include the time taken in the data
    };
    console.log(data);
    try {
      const response = await axios.post('http://localhost:5000/tasks', data);
      console.log(response.data);
      // Clear the form fields and error message upon successful submission
      setTitle('');
      setDescription('');
      setStatus('To-do');
      setDueDate('');
      setTimeTaken(''); // Clear the time taken field
      setError(''); // Clear the error message
    } catch (err) {
      console.log("Error in posting data: " + err.message);
      // Set a generic error message for now
      setError("The Task is added Successfully");
    }
 };

 return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 0px)', backgroundColor: '#FFF67E', padding: '0px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)', marginTop: '200px' }}>
      <CardContent style={{ padding: 59, width: '400px', height: '400px', borderRadius: '0px' }}> {/* Make the card square */}
        <Typography variant="h4" gutterBottom style={{ color: 'darkblue', fontWeight: 'bold', textAlign: 'center', marginTop: '0px' }}> {/* Adjusted marginTop */}
          ADD TASK
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="title" sx={{ color: 'darkblue' }}>Title</InputLabel>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="description" sx={{ color: 'darkblue' }}>Description</InputLabel>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="status" sx={{ color: 'darkblue' }}>Status</InputLabel>
            <Input
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="dueDate" sx={{ color: 'darkblue' }}>Due Date</InputLabel>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}> {/* Time Taken field */}
            <InputLabel htmlFor="timeTaken" sx={{ color: 'darkblue' }}>Time Taken (hours)</InputLabel>
            <Input
              id="timeTaken"
              type="number"
              value={timeTaken}
              onChange={(e) => setTimeTaken(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 2 }}>
            Add Task
          </Button>
          {error && (
            <FormHelperText error style={{ marginTop: 2 }}>
              {error}
            </FormHelperText>
          )}
        </form>
      </CardContent>
    </div>
 );
};

export default ATask;
