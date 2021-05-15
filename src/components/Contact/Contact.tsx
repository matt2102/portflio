import {Grid, makeStyles, Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.text.secondary,
    fontSize: 30
  },
  grid: {
    gridTemplateColumns: "50px 1fr",
    columnGap: '15px'
  },
}))

export const Contact = () => {
  const classes = useStyles()
  return(
    <div>
      <Typography
      variant="subtitle2"
      className={classes.title}>Contact</Typography>
      <Grid
      container
      className={classes.grid}
      >
        <Typography color="secondary">email:</Typography>
        <Typography color="secondary">matt@lajoy.tech</Typography>
      </Grid>
    </div>
  )
}

export default Contact