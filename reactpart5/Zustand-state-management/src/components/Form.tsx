import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useHabit } from '../store/store';

const Form = () => {
    const [name, setName] = useState<string>("");
    const [frequency, setFrequency] = useState<"weekly" | "daily">("daily")
    const {habits, addHabit} = useHabit()
    
    const handleHabit = (e: React.FormEvent) => {
        e.preventDefault()
        addHabit(name, frequency)
        setName("")
        console.log(habits)
    }


  return (
   <>
   <form onSubmit={handleHabit}>
    <Box sx={
        {
            display: "flex",
            flexDirection: "column",
            gap: 2
        }
    }>   
    <TextField id="outlined-basic" label="Enter Your Habit" variant="outlined" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    fullWidth
    />
    <FormControl fullWidth>
  <InputLabel >Freq</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={frequency}
    label="Age"
    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
  >
    <MenuItem value={"daily"}>Daily</MenuItem>
    <MenuItem value={"weekly"}>Weekly</MenuItem>
  </Select>
</FormControl>
<Button variant='contained' type='submit'>Add Habit</Button>
    </Box>
   </form>
   </>
  )
}

export default Form