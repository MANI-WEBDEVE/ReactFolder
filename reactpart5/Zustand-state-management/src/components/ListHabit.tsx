import { useHabit } from '../store/store'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { CheckCircleIcon, Trash2Icon } from "lucide-react"
 
const ListHabit = () => {
const {habits} = useHabit()

const today = new Date().toISOString().split(" ")[0];


  return (
   <Box sx={{display:"flex", flexDirection:"column", gap:2, mt:4}}>
    {habits.map((items) => (
      <Paper key={items.id} elevation={2} sx={{p:2}}>  
        <Grid container alignItems="center" >
          <Grid xs={12} sm={6}>
            <Typography variant="h6" >{items.name}</Typography>
            <Typography variant='body2' color='text.secondary'>{items.frequency}</Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            <Box sx={{display:"flex", justifyContent:"flex-end", gap:2}}>
              <Button variant='outlined' color={items.CompletedDate.includes(today) ? "success" : "primary"}  startIcon={<CheckCircleIcon/>}>{items.CompletedDate.includes(today) ? "Completed" : "Mark Complete"}</Button>
              <Button variant='outlined' color='error' startIcon={<Trash2Icon/>} >Delete</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    ))}
   </Box>
  )
}

export default ListHabit