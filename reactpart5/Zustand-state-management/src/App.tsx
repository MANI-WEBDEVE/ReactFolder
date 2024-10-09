import { Box, Container, Typography } from "@mui/material"
import { useHabit } from "./store/store"
import Form from "./components/Form"
import ListHabit from "./components/ListHabit"


function App() {
  const use =  useHabit()
  console.log(use)

  return (
    <>
   <Container>
    <Box>
      <Typography variant="h2" align="center"  >
        HABIT TRACKER
      </Typography>
    </Box>
    {/* Form */}
    <Form/>
    {/* RanderList */}
    <ListHabit/>
   </Container>
    </>
  )
}

export default App
