import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image,Text } from 'react-native';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSigninPress = () => {
    // Validate form and log in
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Idinput}
        placeholder="ID"
        value={email}
      />
      <TextInput
        style={styles.Pasinput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleSigninPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.findi}>
        <Text style={{marginLeft: 12}}>
            findId
        </Text>
        <Text style={{marginLeft: 12}}>
            findPassword
        </Text>
        <Text style={{marginLeft: 12}}>
            Signup
        </Text>
      </View>
      <View>
        <View style={{ borderBottomColor: 'black',borderBottomWidth: 1,marginTop: 50}} />
      <TouchableOpacity style={styles.fbbutton} onPress={handleSigninPress}>
      <View style={styles.fab}>
            <Image style = {{width: 50,height: 50}} source={require('../Src/facebook.png')}/>
            <Text style={styles.buttonText}>Sign In With Kakaotalk</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.kabutton} onPress={handleSigninPress}>
        <View style={styles.kak}>
            <Image style = {{width: 50,height: 50,borderRadius: 40}} source={require('../Src/kakao.png')}/>
            <Text style={styles.kabuttonText}>Sign In With Kakaotalk</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Idinput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 0,
    padding: 10,
  },
  Pasinput : {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: '80%',
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 12
  },
  fbbutton: {
    width: '80%',
    backgroundColor: 'blue',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  kabutton: {
    width: '80%',
    backgroundColor: 'yellow',
    borderRadius : 12,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    padding: 12,
    textAlign : "center"
  },
  kabuttonText: {
    color: 'black',
    fontSize: 18,
    padding: 12,
    textAlign : "center"
  },
  findi: {
    flexDirection: "row"
  },
  fab: {
    flexDirection : "row",
    marginLeft: 50
  },
  kak : {
    flexDirection : "row",
    marginLeft : 50
  }
});

export default Signin;
