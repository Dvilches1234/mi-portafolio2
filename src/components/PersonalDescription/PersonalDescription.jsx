import {Typography, Link, Box} from "@mui/material"
import Grid from "@mui/material/Grid2"
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';
const PersonalDescription =() => {

    return(
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={12}>
                <Typography variant="h2" justifyContent={"center"} alignItems={"center"} sx={{            
                }}>
                    Welcome to my portfolio!
                </Typography>
            </Grid>
            <Grid size={12}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={{ xs:12, sm: 6, md:6}} >
                        <Box sx={{
                        marginLeft: "15%",
                        }}>
                            <LanguageIcon/>
                            <Link sx={{marginLeft:"2%"}} href="https://www.linkedin.com/in/diego-vilches-andrade-b94144150/">
                            https://www.linkedin.com/in/diego-vilches-andrade-b94144150/
                            </Link>
                        </Box>
                        
                    </Grid>
                    <Grid size={{ xs:12, sm: 6, md:6}} >
                        <Box sx={{
                        marginRight: "15%",
                        }}>
                            <MailIcon/>
                            <Link  sx={{marginLeft:"2%"}} href="diego.vilchesa@gmail.com" >
                                diego.vilchesa@gmail.com
                            </Link>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12}>
                <Typography  sx={{whiteSpace:"pre-line"}}>
                {`Hi, I'm Diego Vilches, a programmer who graduated from Universidad Diego Portales in Chile. I love playing video games and learning about them. I have been making video games for almost five years, participating in game jams and working on personal projects. \n
                I mainly work with Unity and have developed both 2D and 3D games for PC and Android. I'm very passionate about what I do. I hope you enjoy what you see here, and maybe we can work together soon!`}
                </Typography>
                
            </Grid>
        </Grid>
    )
}

export default PersonalDescription