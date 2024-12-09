import { initializeApp, getApps } from 'firebase/app'; // Import getApps to check if Firebase is already initialized
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Ensure AsyncStorage is installed

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXrfagsc012cabutfD17PgaWMYaOMIsko',
  authDomain: 'attendanceapp-51e06.firebaseapp.com',
  projectId: 'attendanceapp-51e06',
  storageBucket: 'attendanceapp-51e06.appspot.com',
  messagingSenderId: '955097218427',
  appId: '1:955097218427:android:05467ee2cd86f89d6b51de',
};

// Initialize Firebase app only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]; // Check if Firebase is already initialized

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app);

// Export the services for use in other parts of the app
export { auth, firestore };
