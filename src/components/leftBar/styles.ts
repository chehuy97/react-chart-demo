import styled from "styled-components";
import { sizes, colors } from "../../utils/styles";
import HomeIcon from "@material-ui/icons/Home";

export const LeftBar = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: ${sizes.appNarBarLeftWidth}px;
  background-color: ${colors.primary};  
`;

export const NavItem = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  padding-left: 20px;
  &:active {
    background-color: ${colors.navbarHover};
  }
`;

export const NavText = styled.p`
  margin-left: 10px;
`;
export const ItemList = styled.div`
  flex: 1;
`;
