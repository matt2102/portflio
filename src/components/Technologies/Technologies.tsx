import { makeStyles, Typography, Grid } from "@material-ui/core"
import Layer, {TechnologyLayer} from "../Layer"


const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    rowGap: '50px',
    width: '100%',
    margin: "auto",
    [theme.breakpoints.down('xs')]: {
      rowGap: '40px',
      borderTop: `1px solid ${theme.palette.primary.main}`,
    },

  },
  title: {
    color: "#CE9175",
    marginTop: "30px",
    [theme.breakpoints.down('xs')]: {
      textAlign: "center"
    }
  }
}))


interface TechnologiesProps {
  technologies: TechnologyLayer[]
}

export const Technologies: React.FC<TechnologiesProps> = ({technologies}) => {
  const classes = useStyles()
  return(
    <Grid className={classes.root}>
      <Typography className={classes.title} variant="subtitle1">Technologies</Typography>
      {technologies.map(technology => (
        <Layer technology={technology} key={technology.name}/>
      ))}
    </Grid>

  )
}

export default Technologies