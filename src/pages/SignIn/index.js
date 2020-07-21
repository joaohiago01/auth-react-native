import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AuthContext from '../../contexts/auth';
// import { Container } from './styles';

const SignIn = () => {
  const { signed, signIn, user } = useContext(AuthContext);

  console.log(signed, user);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={{ color: '#4169E1', fontSize: 18 }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
