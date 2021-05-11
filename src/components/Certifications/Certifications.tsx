import { makeStyles, Typography, Grid } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      borderTop: `1px solid ${theme.palette.primary.main}`,
    },
  },
  title: {
    color: "#6A9955",
    marginTop: "30px",
    [theme.breakpoints.down('xs')]: {
      textAlign: "center"
    }
  },
  grid: {
    background: "black",
    borderRadius: '5px',
    borderTop: "10px solid black",
    borderBottom: "10px solid black",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  img: {
    width: '256px',
    margin: "5px",
    [theme.breakpoints.down("xs")]: {
      margin: "15px 0",
      width: '192px',
    }
  }

}))

export interface Certificate {
  name: string;
  alt?: string;
  src: string;
}

interface CertificationsProps {
  certificates: Certificate[];
}

export const Certifications:React.FC<CertificationsProps> = ({certificates}) => {
  const classes =useStyles()
  return(
    <Grid className={classes.root}>
      <Typography className={classes.title} variant="subtitle1">Certifications</Typography>
      <Grid className={classes.grid}
        container
        justify="space-around"
        alignItems="stretch"
      >
      {certificates.map(cert => (
        <img src={cert.src} alt={cert.alt?cert.alt:"Certificate"} className={classes.img} key={cert.name}/>
      ))}
      </Grid>
    </Grid>
  )
}

export default Certifications