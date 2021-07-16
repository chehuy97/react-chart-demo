import { LoginRequest, User } from './../../redux/AuthRedux';
import axios, { AxiosResponse } from 'axios'

const base_api = 'https://cewa-food.herokuapp.com'

export type ResponeType<T> = {
    httpStatusCode: number,
    errorMessage: string,
    errorCode: string,
    data: T
  }

export const login = (user:User): Promise<AxiosResponse<ResponeType<any>>> => {
    return axios({
      method: 'post',
      url: base_api+ '/api/auth/login',
      data: {
        email: user.email,
        password: user.password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }