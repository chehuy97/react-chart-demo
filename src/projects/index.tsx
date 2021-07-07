import { Route, useRouteMatch, Redirect } from "react-router-dom";
import LeftSideBar  from '../components/leftBar'
import Home from '../pages/home'
import Chart from  '../pages/chart'
import Map from '../pages/map'
import { ProjectPage } from './styles'

const Project = () => {

  const match = useRouteMatch()

  return (
      <ProjectPage>
        <LeftSideBar/>
        <Route
          path={`${match.path}/home`}
          render={() => (
            <Home/>
          )}
        /> 
        <Route
          path={`${match.path}/chart`}
          render={() => (
            <Chart/>
          )}
        /> 
        <Route
          path={`${match.path}/map`}
          render={() => (
            <Map/>
          )}
        /> 
        {match.isExact && <Redirect to={`${match.url}/home`} />}
      </ProjectPage>
  )
};

export default Project;
