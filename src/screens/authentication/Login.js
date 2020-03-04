import React, {useState} from "react";
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import {Alert} from 'react-native'

export default function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleButtonPress = async() => {
      if(username === "" || password === ""){
        Alert.alert("username and password is required");
        return;
      }
      try{
        const response = await fetch("http://10.0.2.2:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json"
          },
          body: JSON.stringify({username, password})
        });
        const status = await response.status;
        const result = await response.json();
        console.log({status, result})
        if(status === 200){
          props.navigation.navigate("AppNavigator")
        }
       
        else Alert.alert("Invalid Credentials")
      } catch(err){
        console.log(err);
        Alert.alert("Error while processing request")
      }
       
    }
    const handleForgotPassword = () => {
        props.navigation.navigate("ForgotPassword");
    }
    const handleRegister = () => {
        props.navigation.navigate("Register");
    }
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16}}>
          <Text category='h1'>LOGIN</Text>
          <Input label="Username" placeholder="john.doe@example.com" value={username} onChangeText={setUsername}/>
          <Input label="Password"  value={password} onChangeText={setPassword} secureTextEntry/>
          <Button onPress={handleButtonPress}>Login</Button>
          <Layout style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center',  marginTop: 4}}>
            <Text>Forgot password? </Text>
            <Text onPress={handleForgotPassword}  status="primary">Reset your password</Text>
          </Layout>
          <Layout style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginTop: 4}}>
            <Text>Don't have an account? </Text>
            <Text onPress={handleRegister} status="primary">Signup now</Text>
          </Layout>
         
        </Layout>
      );
}
