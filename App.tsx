/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './src/pages/homescreen';
import Onboarding from './src/pages/onboarding';
import Login from './src/pages/login';
import Registration from './src/pages/registration';
import Otp from './src/pages/otp';
import Phverified from './src/pages/phverified';
import Personalinfo from './src/pages/personalinfo';
import Mail from './src/pages/mail';
import Otpformail from './src/pages/otpformail';
import Forgotpassword from './src/pages/forgotpasswoed';
import Emailverified from './src/pages/emailverified';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

// Create a stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Homescreen}/>
        <Stack.Screen name="Home" component={Onboarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="otp" component={Otp} />
        <Stack.Screen name="PhVerified" component={Phverified} />
        <Stack.Screen name="PersonalInfo" component={Personalinfo} />
        <Stack.Screen name="Mail" component={Mail} />
        <Stack.Screen name="OtpForMail" component={Otpformail} />
        <Stack.Screen name="emailverified" component={Emailverified} />
        <Stack.Screen name="forgotpassword" component={Forgotpassword} />
      </Stack.Navigator>
    </NavigationContainer>

  )

}

export default App;
