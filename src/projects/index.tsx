import { Route, useRouteMatch, Redirect } from "react-router-dom";
import LeftSideBar  from '../components/leftBar'
import Home from '../pages/home'
import Chart from  '../pages/chart'
import Map from '../pages/map'
import { ProjectPage } from './styles'
import { useEffect } from "react";

const Project = () => {

  const match = useRouteMatch()

  useEffect(() => {
    console.log('match is '+match.path+' and url '+match.url);
    
  })

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
        {match.isExact && <Redirect to={`${match.url}/map`} />}
      </ProjectPage>
  )
};

export default Project;
