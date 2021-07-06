import { LeftBar, NavItem, NavText, ItemList } from "./styles";
import Avatar from "../avatar";
import { useRouteMatch } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MapIcon from "@material-ui/icons/Map";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const index = () => {
  // const match = useRouteMatch();
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
    return (
      <NavItem>
        {showIconItem(text)}
        <NavText>{text}</NavText>
      </NavItem>
    );
  };

  return (
    <LeftBar>
      <Avatar />
      <ItemList>
        {renderLinkItem("Home", "/Home")}
        {renderLinkItem("Chart", "/Chart")}
        {renderLinkItem("Map", "/Map")}
      </ItemList>
      {renderLinkItem('Sign out', '')}
    </LeftBar>
  );
};

export default index;
