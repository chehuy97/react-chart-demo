import styled from "styled-components";
import { fontSize } from "../../utils/styles";

export const AvatarView = styled.div`
  text-align: center;
`;

export const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: solid 2px white;
  margin-top: 30px;
`;

export const Line = styled.div`
  margin: 0px 20px 0px 20px;
  background-color: white;
  height: 1px;
`;

export const Username = styled.p`
  color: white;
  font-size: ${fontSize.avatarSize}px;
  font-weight: bold;
  margin: 20px 0px 20px 0px;
`;
