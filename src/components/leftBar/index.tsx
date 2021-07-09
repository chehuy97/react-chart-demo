import { LeftBar, NavItem, NavText, ItemList, StyledButton } from "./styles";
import Avatar from "../avatar";
import { useHistory, useRouteMatch } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MapIcon from "@material-ui/icons/Map";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const LeftNavBar = () => {
  const match = useRouteMatch();
  const history = useHistory();
  
  const showIconItem = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <HomeIcon />;
      case "Chart":
        return <EqualizerIcon />;
      case "Map":
        return <MapIcon />;
      default:
        return <ExitToAppIcon />;
    }
  };

  const handle_logout = () => {
    localStorage.removeItem('isAuthenticated')
    history.push('/signin')
  }

  const renderLinkItem = (text: string, path: string) => {
    const linkItemProps = {
      as: NavLink,
      exact: true,
      to: `${match.path}${path}`,
    };
    return (
      <NavItem {...linkItemProps}>
        {showIconItem(text)}
        <NavText>{text}</NavText>
      </NavItem>
    );
  };

  return (
    <LeftBar>
      <Avatar />
      <ItemList>
        {renderLinkItem("Home", "/home")}
        {renderLinkItem("Chart", "/chart")}
        {renderLinkItem("Map", "/map")}
      </ItemList>
      <Button variant="contained" style={StyledButton} onClick={() => handle_logout()}>
        Signout
      </Button>
    </LeftBar>
  );
};

export default LeftNavBar;
