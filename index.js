/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import MainPage from './src/main.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainPage);
