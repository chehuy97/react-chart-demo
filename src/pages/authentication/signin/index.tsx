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
import { Button, TextField } from "@material-ui/core";

const Signin = () => {
  const divStyle = {
    margin: "40px",
    border: "5px solid pink",
  };

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
          />
          <TextField
            style={fieldStyle}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button
            style={btnStyle}
            onClick={() => console.log("hehe")}
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
