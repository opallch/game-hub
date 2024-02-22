import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Grid object
  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
      <Show above='lg'>
        <GridItem area={'nav'} bg={'coral'}>Nav</GridItem>
        <GridItem area={'nav'} bg={'coral'}>Nav</GridItem>
        <GridItem area={'aside'} bg={'blue'}>Aside</GridItem>
        <GridItem area={'main'} bg={'black'}>Main</GridItem>
      </Show>
      <Show above='base'>
        <GridItem area={'nav'}><NavBar/></GridItem>
        <GridItem area={'main'} bg={'black'}>Main</GridItem>
      </Show>
    </Grid>
  )
}

export default App
