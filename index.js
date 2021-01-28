/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import IndexRender from './src/IndexRender';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => IndexRender);
