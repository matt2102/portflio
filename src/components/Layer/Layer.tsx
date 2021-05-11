import { makeStyles, Typography, Grid } from "@material-ui/core"
interface TechnologyImage{
  name: string;
  src: string;
  alt?: string;
}

export interface TechnologyLayer {
  name: string;
  images: TechnologyImage[]
}

interface LayerProps {
  technology: TechnologyLayer
}

const useStyles = makeStyles(theme => ({
  grid: {
    background: '#000000',
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1",
    borderRadius: 5,
    border: "10px solid black",
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr'
    }
  },
  img: {
    width: "auto",
    height: '100px',
    margin: '0 5px',
    [theme.breakpoints.down('xs')]: {
      margin: '5px',
    }
  },
  title: {
    gridColumn: 1,
    color: theme.palette.primary.main,
    fontSize: 40,
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      textAlign: "center"
    }
  },
  flexContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    [theme.breakpoints.down('xs')]: {
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }
}))

export const Layer:React.FC<LayerProps> = ({technology}) => {
  const classes = useStyles()
  return(
    <Grid className={classes.grid}>
        <Typography className={classes.title}>{technology.name}</Typography>
        <div className={classes.flexContainer}>
        {
          technology.images.map(
            img=>(
              <img src={img.src} className={classes.img} alt={img.alt?img.alt:img.name} key={`img-${img.name}`}/>
            )
          )
        }
        </div>
    </Grid>
)
}

export default Layer