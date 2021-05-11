import { Grid, makeStyles } from "@material-ui/core"
import Certifications, { Certificate } from "../Certifications"
import { ProjectData } from "../Project"
import Projects from "../Projects"
import Technologies from "../Technologies"
import { TechnologyLayer } from "../Layer"
import Personal from "../Personal"
import { Social } from "../Connect"
import HomeHero from "../HomeHero"

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: '1fr',
    gridTemplateRows: "auto",
    width: '96%',
    maxWidth: '1200px',
    rowGap: "50px",
    margin: 'auto',
    marginBottom: '100px',
    [theme.breakpoints.down("xs")]: {
      maxWidth: "96%"
    }
  }
}))

interface HomeProps {
  projects: ProjectData[];
  certificates: Certificate[];
  technologies: TechnologyLayer[];
  socialMedia: Social[];
}

export const Home:React.FC<HomeProps> = (props) => {
  const {
    projects,
    certificates,
    technologies,
    socialMedia
  } = props
  const classes = useStyles()
  return(
    <Grid>
    <HomeHero/>
    <Grid className={classes.root}>
      <Projects projects={projects}/>
      <Certifications certificates={certificates}/>
      <Technologies technologies={technologies}/>
      <Personal socialMedia={socialMedia}/>
    </Grid>
    </Grid>
  )
}

export default Home