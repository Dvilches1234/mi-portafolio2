import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Typography, Button, Divider} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from "@mui/material/Grid2"
import GameInfo from "./components/GameInfo/GameInfo"
import PersonalDescription from './components/PersonalDescription/PersonalDescription';
import {exportGameData} from "./utils/utils"


function App() {
  const gameData = exportGameData()
  const description = `Join our protagonist in his adventure to recover his memory.\n\n This game was made for the Halloween Game Jam 2024. The theme is haunting Memories.\n\n In this game we impersonate a man with no memories in a strange places. His memory is fragmented in several prisms he have to find. At the same time, there are evil spirits guarding those prisms who try to catch us. So  in a way he is haunting his memories while the guardians of his memories are trying to catch him`
  return (
    <Box  display="flex" justifyContent="center" alignItems="center">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={12}>
          <PersonalDescription/>
        </Grid>
        <Grid size={12}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {gameData.map((game) => (
              <Grid size={12}>
                <GameInfo
                gameTitle={game.gameTitle}
                gameUrl={game.gameUrl}
                videoUrl={game.videoUrl}
                description={game.description}
              />          
            
              </Grid>        
            ))}
            <Grid size={12}>
                <GameInfo
                gameTitle={"game.gameTitle"}
                gameUrl={"https://srdenso.itch.io/ghosts-from-the-past"}
                videoUrl={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}
                description={description}
              />          
            
              </Grid> 
          </Grid>
        </Grid>
      </Grid>
      
    </Box>
  );
}

export default App
