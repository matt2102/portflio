import { Grid, makeStyles } from '@material-ui/core'
import About from '../About'
import Connect, {Social} from '../Connect'
import Contact from '../Contact'

interface PersonalProps {
  socialMedia: Social[]
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: '2fr 1fr 0.5fr',
    gridTemplateRows: "auto auto",
    rowGap: '20px',
    columnGap: '10px',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '2fr 1fr',
      rowGap: '10px',
    }
  },
  about: {
    gridColumn: '1',
    gridRow: '1 / -1'
  },
  contact: {
    gridColumn: "2",
    gridRow: "1"
  },
  connect: {
    gridColumn: "3",
    gridRow: "1",
    [theme.breakpoints.down('xs')]: {
      gridColumn: "2",
      gridRow: "2",
    }
  }
}))

export const Personal:React.FC<PersonalProps> = (props) => {
  const {
    socialMedia
  } = props
  const classes = useStyles()
  return(
    <Grid className={classes.root}>
      <div className={classes.about}>
        <About/>
      </div>
      <div  className={classes.contact}>
        <Contact/>
      </div>
      <div className={classes.connect}>
        <Connect socialMedia={socialMedia || []}/>
      </div>

    </Grid>
  )
}

export default Personal