import styled from "styled-components";
import { colors, sizes } from "../../../utils/styles";
import { TextField, Button } from '@material-ui/core'

export const LoginBlock = styled.div`
  background-color: ${colors.loginBg};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LoginForm = styled.div`
  width: ${sizes.imgLoginFormWidth}px;
  height: ${sizes.imgLoginFormHeight};
  background-color: white;
  border-radius: 10px;
  margin-bottom: 500px;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 10px 18px #888888
`;

export const LoginImage = styled.img`
    width: 200px;
    height: ${sizes.imgLoginFormHeight}px;
    border-bottom-left-radius:10px;
    border-top-left-radius: 10px;
`

export const Title = styled.p`
    color: gray;
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
`

export const LoginArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`

export const fieldStyle = {
    width: '350px',
    height: '50px',
    marginTop: '15px',
    marginBottom: '15px'
}

export const btnStyle = {
    width: '350px',
    height: '50px',
    backgroundColor: '#3895D3',
    color: 'white',
    marginTop: '15px'
} 