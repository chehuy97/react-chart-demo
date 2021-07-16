import {
  LoginBlock,
  LoginForm,
  LoginImage,
  Title,
  LoginArea,
  btnStyle,
  fieldStyle,
  LanguageBlock,
  Line
} from "./styles";
import image_form from "../../../App/assets/images/blue.jpeg";
import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react"
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux'
import { useSelector } from '../../../redux'
import { login, User } from '../../../redux'

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation('common')

  const loginSuccess = (data:any) => {
    console.log('LOGIN SUCCESS '+ data);
    
  }

  const loginFalure = (msg:string) => {
    console.log('LOGIN FAILURE: '+msg)
  }

  const handle_login = async () => {
      // if(username == 'admin' && password == '123456'){
      //     //ok
      //     localStorage.setItem("isAuthenticated", "true");
      //     history.replace(from)x
      // } else {
      //   alert('wrong account info')
      // }
      let user:User = {
        email: username,
        password: password
      }
      await dispatch(login(user, loginSuccess, loginFalure))
  }

  const switch_lang = (lang:string) => {
    console.log("Language is "+lang);
    localStorage.setItem('language', lang)
    i18n.changeLanguage(lang)
    
  }

  return (
    <LoginBlock>
      <LoginForm>
        <LoginImage src={image_form} />
        <LoginArea>
          <Title>{t('Login Form')}</Title>
          <TextField
            style={fieldStyle}
            id="standard-required"
            label={t('Username')}
            placeholder={t('Username')}
            variant="outlined"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            style={fieldStyle}
            id="outlined-password-input"
            label={t('Password')}
            type='password'
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
            {t('Login')}
          </Button>
          <LanguageBlock>
            <Button onClick={() => {switch_lang('en')}}>English</Button>
            <Line/>
            <Button onClick={() => {switch_lang('jp')}}>Japanese</Button>
          </LanguageBlock>
        </LoginArea>
      </LoginForm>
    </LoginBlock>
  );
};

export default Signin;
