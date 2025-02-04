import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Typography, Button, Divider} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from "@mui/material/Grid2"
import GameInfo from "./components/GameInfo/GameInfo"
import {exportGameData} from "./utils/utils"


function App() {
  const gameData = exportGameData()
  return (
    <Box  display="flex" justifyContent="center" alignItems="center">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={12}>
          <Typography variant="h2" justifyContent={"center"} alignItems={"center"} sx={{
            
          }}>
            Welcome to my portfolio!
          </Typography>
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
          </Grid>
        </Grid>
      </Grid>      
    </Box>
  );
}

export default App
