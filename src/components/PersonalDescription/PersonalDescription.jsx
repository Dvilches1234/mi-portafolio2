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
                    <Grid size= {6} >
                        <Box sx={{
                        marginLeft: "15%",
                        }}>
                            <LanguageIcon/>
                            <Link sx={{marginLeft:"2%"}} href="https://www.linkedin.com/in/diego-vilches-andrade-b94144150/">
                            https://www.linkedin.com/in/diego-vilches-andrade-b94144150/
                            </Link>
                        </Box>
                        
                    </Grid>
                    <Grid size= {6} >
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
                {`Hi, I'm Diego Vilches and I'm a programmer who graduated from Universidad Diego Portales in Chile. I love to play videogames and learn about them. I have been almost 5 years making videogames 
                for myself participating in gamejams and some personal projects. \n
                I work mostly in Unity and i've made 2D and 3D games for pc and android. I'm very pationate for what i do. I hope you enjoy what you see here and maybe we can work together soon.`}
                </Typography>
                
            </Grid>
        </Grid>
    )
}

export default PersonalDescription