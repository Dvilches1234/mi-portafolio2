import { Box, Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReactPlayer from "react-player";

import { useMediaQuery } from "@mui/material";
//import dynamic from "next/dynamic";
//const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });



const theme = createTheme();
theme.typography.h2 = {
    fontSize: '0.2rem',
    color: 'white',
}



const GameInfo = ({gameUrl, videoUrl, gameTitle, description}) => {    
    const goToUrl = () => {
        window.open(gameUrl, "_blank", "noopener,noreferrer")
    }
    const isMobile = useMediaQuery("(max-width:600px)");
    const desktopHeight = "500px"
    const mobileHeight = "200px"

    const trueHeight = isMobile?mobileHeight: desktopHeight
    return (

        <Box display="flex" justifyContent="left" 
            sx={{

                width: "80%",
                marginLeft: "10%",
                marginBottom: "2%",
                marginTop: "2%",
                //height:"120%",
            }}
        >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={12} sx={{
                    justifyContent:"left",
                    alignItems: "start"

                }}>
                    <Typography variant="h3" align="left">
                        {gameTitle}
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <Box
                        sx={{

                            marginBottom: "2%",
                            
                            border: 1,
                            borderRadius: "1%",
                            borderColor: "white"
                            //height:"120%",
                        }}
                    >
                        <Box 
                         sx={{


                            marginLeft: "4%",
                            marginRight: "4%",
                            marginBottom: "2%",
                            marginTop: "2%",
                        }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid size={{ xs:12, sm: 6, md:6}}>
                                <ReactPlayer
                                    url={videoUrl}
                                    controls={true}
                                    width="100%"
                                    height={trueHeight}
                                />
                            </Grid>
                            <Grid size={{ xs:12, sm:6, md:6}}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid size={12}>
                                        <Typography align="left" sx={{whiteSpace:"pre-line"}}>
                                            {description}
                                        </Typography>
                                    </Grid>
                                    <Grid size={12} sx={{display: "flex", justifyContent:"flex-start"}}>
                                        <Button variant="contained" align="left" onClick={goToUrl}>
                                            <PlayArrowIcon />
                                            Play the game
                                        </Button>
                                    </Grid>
                                   
                                </Grid>
                            </Grid>
                        </Grid>


                        </Box>
                    </Box>
                </Grid>
            </Grid>


        </Box>

    )
}

export default GameInfo