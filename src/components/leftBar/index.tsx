import { LeftBar, NavItem, NavText, ItemList } from "./styles";
import Avatar from "../avatar";
import { useRouteMatch } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MapIcon from "@material-ui/icons/Map";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  const match = useRouteMatch();
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

  const renderLinkItem = (text: string, path: string) => {

    const linkItemProps = {as: NavLink, exact: true, to: `${match.path}${path}`}
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
      {renderLinkItem('Sign out', '')}
    </LeftBar>
  );
};

export default LeftNavBar;
