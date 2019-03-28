import { fbConfig } from '../../config';
import * as firebase from 'firebase';

firebase.initializeApp(fbConfig);

export default firebase;