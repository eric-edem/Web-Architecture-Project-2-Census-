import React from "react";
import { Layout, Text } from '@ui-kitten/components';


export default function ForgotPassword(){
  
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16}}>
      <Layout style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginTop: 4}}>
        <h> RESET PASSWORD</h>
        
      </Layout>
      
      <Input label="Email" placeholder="john.doe@example.com" value={email} onChangeText={setEmail}/>
      
      <Button onPress={handleButtonPress} >Send Me Instructions</Button>
        </Layout>
      );
}
