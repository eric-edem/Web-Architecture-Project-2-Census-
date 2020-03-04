import React, {useEffect} from "react";
import { Layout, Text } from '@ui-kitten/components';


export default function Splash(props){
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('AuthStack')
    }, 3000)
  })
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text category='h1'>SPLASH</Text>
        </Layout>
      );
}
