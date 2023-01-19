import React, { useState } from 'react';
import { View, StyleSheet, Image,TextInput, TouchableOpacity, Text } from 'react-native';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignupPress = () => {
    // Validate form and create account
  };

  return (
    <View style={styles.container}>
      <View>
      <Image style = {{marginBottom: 40,marginLeft: 80,width: 200,height: 100,borderRadius: 60}} source={require("../Src/welcommar.jpg")}/>
        <Text style={{marginLeft: 120}}>
            You are Almost there!!
        </Text>
        <Text style={{marginLeft: 80,marginBottom: 20,color: "green",fontWeight: "bold"}}>
            Please put your information to sign up!!
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.pinput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.cinput}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput
        style={styles.usninput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="PhoneNumber"
        onChangeText={setConfirmPassword}
      />
      <View style={styles.btns}>
        <TouchableOpacity style={styles.sinbtn}>
            <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supbtn} onPress={handleSignupPress}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 12
  },
  input: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 12
  },
  usninput : {
    width: '95%',
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    marginTop : 12,
    padding: 10,
    borderRadius: 12
  },
  pinput : {
    width: '95%',
    borderBottomWidth: 0,
    borderWidth :1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  cinput : {
    width: '95%',
    borderWidth : 1,
    borderTopColor: "grey",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  btns: {
    flexDirection: "row",
    marginTop : 10
  },
  sinbtn: {
    width: '46%',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12
  },
  supbtn : {
    width: '46%',
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 12,
    borderRadius: 12
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Signup;
