import { Route } from "react-router-dom";
import LeftSideBar  from '../components/leftBar'
import Home from '../pages/home'
import { ProjectPage } from './styles'

const project = () => {
  return (
      <ProjectPage>
        <LeftSideBar/>
        <Home/>
      </ProjectPage>
  )
};

export default project;
