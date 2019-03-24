import firebase from 'firebase';
import { fbConfig } from '../../../config';

const firebaseConfig = fbConfig;

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;