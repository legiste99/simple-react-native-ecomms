import {SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import Signin from './src/screens/auth/Signin';
import Config from "react-native-config";

const WEB_CLIENT_ID =
  '949029946886-20ulkbv6g0hr03jvjtto7vrp1v9rbqr2.apps.googleusercontent.com';

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  return (
    <SafeAreaView>
      {/*<Splash />*/}
      <Signin />
    </SafeAreaView>
  );
}
