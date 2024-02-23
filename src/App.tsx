import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import useGenres from "./hooks/useGenres";
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from "./components/GenreList"
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const { genres, error } = useGenres();
  console.log(genres);
  // Grid object
  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      gap={5}
      >
      <GridItem area={'nav'}><NavBar/></GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}><GenreList genres={genres}/></GridItem>
      </Show>
        <GridItem area={'main'}><GameGrid/></GridItem>
    </Grid>
  )
}

export default App
