import Home from "../../components/Home"
import {projects, certificates, technologies, socialMedia} from "./data"


export const HomeView = () => {
  return(
    <Home
      projects={projects}
      certificates={certificates}
      technologies={technologies}
      socialMedia={socialMedia}
    />
  )
}

export default HomeView