/// <reference types="react-scripts" />
import mongoose from 'mongoose';
import { RouteComponentProps } from 'react-router-dom';

export interface IUser extends mongoose.Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  authenticated: IAuthenticated;
}

export interface IAuthenticated {
  (password: string): boolean
}

export interface IAdventure extends mongoose.Document {
  _id: string;
  name: string;
  locations: ILocation[];
}

export interface ILocation extends mongoose.Document {
  _id: string;
  name: string;
  latitude: number;
  longitude: number;
  pictureUrl: string;
  listIndex: number;
}

export interface ISetToken extends RouteComponentProps {
  setToken: Function;
}

export interface INavigation {
  logout: Function;
}

export interface IProfile {
  userId: string;
}

export interface IAdventureList {
  adventures: IAdventure[];
  setSelectedAdventure: Function;
}

export interface IAdventureTime {
  selectedAdventure: string;
}

export interface IViewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IUserLocation {
  latitude: number;
  longitude: number;
}