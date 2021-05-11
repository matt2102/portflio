import {makeStyles, Typography} from "@material-ui/core"

const text = "I have been programming since 2016, working mainly with Python + Django webservers, React on the front-end and hosting on Amazon Web Services.  Currently, I am developing software for my business: LaJoy Technology Services, as well as taking on contract work.  As a Coloradan, you may find me mountain biking, hiking, or skiing when I’m not working."

const useStyles = makeStyles(theme => ({
  root: {

  },
  title: {
    color: theme.palette.text.secondary,
    fontSize: 30
  },
  about: {
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    paddingLeft: '15px',
    fontWeight: 300
  }
}))

export const About = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Typography variant="subtitle2" className={classes.title}>About Me</Typography>
      <Typography
        variant="body1"
        color="primary"
        className={classes.about}>{text}</Typography>
    </div>
  )
}

export default About