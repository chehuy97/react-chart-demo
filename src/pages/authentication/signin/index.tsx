import {
  LoginBlock,
  LoginForm,
  LoginImage,
  Title,
  LoginArea,
  btnStyle,
  fieldStyle,
} from "./styles";
import image_form from "../../../App/assets/images/blue.jpeg";
import login_bg from '../../../App/assets/images/login_bg.jpeg';
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { textSpanIntersection } from "typescript";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handle_login = () => {
      if(username == 'admin' && password == '123456'){
          //ok
          localStorage.setItem("isAuthenticated", "true");
          history.push('/project')
      } else {
        alert('wrong account info')
      }
  }

  return (
    <LoginBlock>
      <LoginForm>
        <LoginImage src={image_form} />
        <LoginArea>
          <Title>Signin Form</Title>
          <TextField
            style={fieldStyle}
            id="standard-required"
            label="Username"
            placeholder="username"
            variant="outlined"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            style={fieldStyle}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            style={btnStyle}
            onClick={() => handle_login()}
            variant="contained"
          >
            Login
          </Button>
        </LoginArea>
      </LoginForm>
    </LoginBlock>
  );
};

export default Signin;
