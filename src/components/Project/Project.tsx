import {CardContent, Typography, Card, makeStyles, Grid} from "@material-ui/core"


export interface ProjectData {
  title: string;
  overview: string;
  keyPoints: string[];
}

interface ProjectProps {
  project: ProjectData
}

const useStyles = makeStyles(theme => ({
  root:{
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "30px 60px auto 60px auto",
    background: "#0a0a0a",
    border: "10px solid #0a0a0a",
    borderRadius: '5px'
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    color: theme.palette.text.secondary
  },
  overviewTitle: {
    gridRow: 2,
    fontSize: 24,
    color: theme.palette.primary.main,
    fontWeight: 300,
    margin: "auto",
    marginLeft: 0,
    marginBottom: 0,
  },
  overview: {
    gridRow: 3
  },
  keyPointsTitle: {
    gridRow: 4,
    fontSize: 24,
    color: theme.palette.primary.main,
    fontWeight: 300,
    margin: "auto",
    marginLeft: 0,
    marginBottom: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: '15px',
    rowGap: '15px',
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "auto"
    }
  }

}))

export const Project:React.FC<ProjectProps> = (props) => {
  const {
    project
  } = props
  const classes = useStyles()
  return(
    <Grid className={classes.root}>
      <Typography className={classes.title}>{project.title}</Typography>
      <Typography className={classes.overviewTitle}>Overview:</Typography>
      <Card className={classes.overview}>
          <CardContent>
            <Typography variant="body2">{project.overview}</Typography>
          </CardContent>
        </Card>


      <Typography className={classes.keyPointsTitle}>Key Points:</Typography>
      <Grid className={classes.grid}>
        {project.keyPoints.map(point => (
          <Card key={point}>
            <CardContent>
              <Typography variant="body2">{point}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  )
}

export default Project