import {Typography, makeStyles, Grid} from "@material-ui/core"

export interface Social{
  src: string;
  alt?: string;
  name: string;
  url: string;
}

interface ConnectProps {
  socialMedia: Social[];
}

const useStyles = makeStyles(theme => ({
  root: {

  },
  title: {
    color: theme.palette.text.secondary,
    fontSize: 30
  },
  img: {
    width: 64,
    '&:hover':{
      cursor: "pointer"
    }
  }
}))


export const Connect: React.FC<ConnectProps> = (props) => {
  const {
    socialMedia,
  } = props
  const classes = useStyles()
  return(
    <div>
      <Typography variant="subtitle2" className={classes.title}>Connect</Typography>
      <Grid
      container
      justify="flex-start"
      alignContent="stretch"
      >


      {socialMedia.map(social=>(
        <img
          key={social.name}
          src={social.src}
          alt={social.alt?social.alt:social.name}
          className={classes.img}
          onClick={()=>window.open(social.url, "_blank")}/>
      ))}
      </Grid>

    </div>
  )
}

export default Connect