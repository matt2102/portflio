import { makeStyles, Typography } from '@material-ui/core';
import ParticleField from 'react-particles-webgl';
import useWindowDimensions from '../../hooks/useWindowDimension';
import code from "../../assets/images/backgrounds/codeBackground.png"
// config tool for particles
// https://www.timellenberger.com/particles


const config2 = {
  showCube: false,
  dimension: '3D',
  velocity: 0.8,
  boundaryType: 'bounce',
  antialias: false,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1
  },
  lines: {
    colorMode: 'rainbow',
    color: '#100f20',
    transparency: 0.9,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 300,
    visible: true
  },
  particles: {
    colorMode: 'rainbow',
    color: '#3FB568',
    transparency: 0.9,
    shape: 'square',
    boundingBox: 'canvas',
    count: 500,
    minSize: 10,
    maxSize: 75,
    visible: true
  },
  cameraControls: {
    enabled: false,
    enableDamping: true,
    dampingFactor: 0.2,
    enableZoom: true,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    resetCameraFlag: false
  },
  limitConnections: false
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '90vh'
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '90vh',
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    margin: "0",
    color: "#FFD700",
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: 34
    }
  },
  imgContainer: {
    width: '100%',
    maxWidth: '100vw',
    minWidth: '100%',
    height: '90vh'
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
    maxWidth: "100%",
    height: '100%',
    objectFit: 'cover'
  }
}))

export const HomeHero = () => {
  const classes = useStyles()
  const {width} = useWindowDimensions()
  return(
  <div className={classes.root}>
    {width && width>600?
      <ParticleField config={config2}/>
      :
      <div className={classes.imgContainer}>
        <img src={code} alt="python code"  className={classes.img}/>
      </div>

    }

    <div className={classes.overlay}>
      <Typography variant="h1" className={classes.title}>Matt LaJoy: Developer</Typography>
    </div>
  </div>
  )
}

export default HomeHero