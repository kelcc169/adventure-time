/// <reference types="react-scripts" />
import mongoose from 'mongoose';
import { RouteComponentProps } from 'react-router-dom';

export interface IUser extends mongoose.Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  library: string;
  authenticated: IAuthenticated;
}

export interface ISetToken extends RouteComponentProps {
  setToken: Function;
}

export interface INavigation {
  logout: Function;
}