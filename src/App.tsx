import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Grid object
  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
      <GridItem area={'nav'}><NavBar/></GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} bg={'blue'}>Aside</GridItem>
      </Show>
        <GridItem area={'main'}><GameGrid/></GridItem>
    </Grid>
  )
}

export default App
