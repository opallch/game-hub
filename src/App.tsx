import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import useGenres, { Genre } from "./hooks/useGenres";
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from "./components/GenreList"
import './App.css'


function App() {
  const [ selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [ searchInput, setSearchInput] = useState<string>("");
  const { genres, error } = useGenres();
  
  // Grid object
  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      gap={5}
      >
      <GridItem area={'nav'}><NavBar onSearch={setSearchInput}/></GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}><GenreList genres={genres} onSelectGenre={setSelectedGenre}/></GridItem>
      </Show>
        <GridItem area={'main'}><GameGrid selectedGenre={selectedGenre} searchInput={searchInput}/></GridItem>
    </Grid>
  )
}

export default App
