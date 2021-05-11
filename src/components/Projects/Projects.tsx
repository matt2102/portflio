import { makeStyles, Typography,Grid } from "@material-ui/core"
import Project, {ProjectData} from "../Project"
const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: '1fr',
    gridTemplateRows: "auto",
    rowGap: '50px'
  },
  title: {
    color: "#C586C0",
    marginTop: "30px",
    [theme.breakpoints.down('xs')]: {
      textAlign: "center"
    }
  }
}))

interface ProjectsProps {
  projects: ProjectData[];
}

export const Projects:React.FC<ProjectsProps> = ({projects}) => {
  const classes = useStyles()
  return(
    <Grid className={classes.root}>
    <Typography className={classes.title} variant="subtitle1">Projects</Typography>
    {projects.map(project => (
      <Project project={project} key={project.title}/>
    ))}

    </Grid>
  )
}

export default Projects