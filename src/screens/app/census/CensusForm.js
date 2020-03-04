import React, {useState } from "react";
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';
const data1 = [
  { text: 'MALE' },
  { text: 'FEMALE' },
];
const data2 = [
  { text: 'Single' },
  { text: 'Married' },
];
import {ScrollView, Alert, KeyboardAvoidingView} from 'react-native';

export default function MeterDetails(props){
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [OtherName, setOtherName] = useState("");
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [houseHoldSize, sethouseHoldSize] = useState("");
    const [gender, setGender] = useState(null);
    const [maritalStatus, setMaritalStatus] = useState(null);
    const handleButtonPress = () => {
        props.navigation.navigate("AppNavigator")
    }
    const handleCaptureMeterImage = async () => {
      const data = {
        first_name: FirstName,
        last_name: LastName,
        other_name: OtherName,
        date_of_birth: DateOfBirth,
        household_size: houseHoldSize,
        gender: gender.text,
        marital_status: maritalStatus.text
      }

      try{
      const response = await fetch("http://10.0.2.2:4000/census", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const status = await response.status;
      const result = await response.json();
      console.log({status, result});
      Alert.alert("Census Data Successfully Saved");
      setFirstName("");
      setLastName("");
      setOtherName("");
      setDateOfBirth("");
      sethouseHoldSize("");
      setGender(null);
      setMaritalStatus(null);
    } catch(err){
      console.log(err)
    }
        // props.navigation.navigate("MeterImage");
    }
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
      <Layout style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 16}}>
      <Text category='h1'>Census Fill Out Form</Text>
      <Input style={{marginTop: 16}} label="Enter First Name" placeholder="eg. Eric " value={FirstName} onChangeText={setFirstName}/>
      <Input style={{marginTop: 16}} label="Enter Last Name" placeholder="eg.  Dzeha" value={LastName} onChangeText={setLastName}/>
      <Input style={{marginTop: 16}} label="Enter Other Name" placeholder="eg. Edem " value={OtherName} onChangeText={setOtherName}/>
      <Input style={{marginTop: 16}} label="Enter Date Of Birth" placeholder="eg. 05-09-1998" value={DateOfBirth} onChangeText={setDateOfBirth}/>
      <Input style={{marginTop: 16}} label="Enter Household Size" placeholder="" value={houseHoldSize} onChangeText={sethouseHoldSize}/>
      <Select 
        data={data1}
        selectedOption={gender}
        onSelect={setGender}
        placeholder={"Select Gender"}
        style={{width: 350, marginTop: 10}}
      />
      <Select 
        data={data2}
        selectedOption={maritalStatus}
        onSelect={setMaritalStatus}
        placeholder={"Select Marital Status"}
        style={{width: 350, marginTop: 10}}
      />
      <Button style={{ marginTop: 8} }onPress={handleCaptureMeterImage} >SAVE</Button>   
    </Layout>
    </KeyboardAvoidingView>
    </ScrollView>
      );
}
