import styled from "styled-components";
import { sizes, colors, mixin } from "../../utils/styles";
import Button from '@material-ui/core/Button';

export const LeftBar = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: ${sizes.appNavBarLeftWidth}vw;
  background-color: ${colors.primary};  
`;

export const NavItem = styled.div`
  color: white;
  margin: 10px 20px 10px 20px;
  padding-left: 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  text-decoration: none;
  ${mixin.clickable}
  &.active {
    font-weight: bold;
    color: gray;
    background-color: ${colors.navbarHover};
  }
  &:hover {
    color: gray;
    background-color: ${colors.navbarHover};
  }
`;

export const NavText = styled.p`
  margin-left: 10px;
`;
export const ItemList = styled.div`
  flex: 1;
`;

export const StyledButton = {
  margin: '10px 20px 10px 20px'
}