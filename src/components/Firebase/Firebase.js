import { fbConfig } from '../../config';
import { initializeApp, firestore } from 'firebase';

initializeApp(fbConfig);

export default firestore;
