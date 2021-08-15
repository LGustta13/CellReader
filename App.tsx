// CORE
import React from 'react';
import {Text} from 'react-native';

// COMMUNITY
import {useFonts} from 'expo-font';
import {ThemeProvider} from 'styled-components/native';
import AppLoading from 'expo-app-loading';

// MINE
import theme from './src/global/styles/theme';


export default function App(){

  const [fontsLoaded] = useFonts({
    'SFPro-SemiBold': require('./src/assets/fonts/SFProDisplaySemiBold.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Text style={{fontFamily: theme.fonts.semibold, marginTop: 50, fontSize: 100}}>
        Display
      </Text>
    </ThemeProvider>
  )
}
