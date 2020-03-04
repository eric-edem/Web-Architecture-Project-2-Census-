import React from 'react';
import 'react-native-gesture-handler';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import AppContainer from "./src/navigators/AppContainer";


const App = () => (
  
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AppContainer />
    </ApplicationProvider>
);

export default App;