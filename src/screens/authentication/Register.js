import React, {useState} from "react";
import { Layout, Text, Input, Button, CheckBox } from '@ui-kitten/components';


export default function Register(props){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const handleButtonPress = async () => {
      if(username === "" || password === "" || email === ""){
        Alert.alert("username, email or password is required");
        return;
      }
      try{
        const response = await fetch("http://10.0.2.2:4000/user", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json"
          },
          body: JSON.stringify({username, password, email})
        });
        const status = await response.status;
        if(status === 200)
        props.navigation.navigate("AppNavigator")
        else Alert.alert("Invalid Credentials")
      } catch(err){
        console.log(err);
        Alert.alert("Error while processing request")
      }
       
        props.navigation.navigate("AppNavigator")
    }
    const handleForgotPassword = () => {
        props.navigation.navigate("ForgotPassword");
    }
    const handleLogin = () => {
        props.navigation.navigate("Login");
    }
    const handleTermsAndConditions = () => {
      props.navigation.navigate("TermsAndConditions");
    }
    const handleCheckbox = (event) => {
        setChecked(!checked);
    }
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16}}>
        <Text category='h1'>Register</Text>
        <Input label="Username" placeholder="eg. E.Dzeha" value={username} onChangeText={setUsername}/>
        <Input label="Email" placeholder="john.doe@example.com" value={email} onChangeText={setEmail}/>
        <Input label="Password"  value={password} onChangeText={setPassword} secureTextEntry/>
        <Button style={{ marginTop: 6} }onPress={handleButtonPress} >Register Now</Button>
        
        
          <Layout style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginTop: 12}}> 
            <CheckBox
              checked={checked}
              onChange={handleCheckbox}
            />
             <Text onPress={handleTermsAndConditions} status="primary"> Terms and conditions</Text>
          </Layout>
         
          <Text style={{marginTop: 4}}>Already have an acount? 
            <Text onPress={handleLogin} status="primary"> Login here</Text>
          </Text>
          
        
       
      </Layout>
    );
}
