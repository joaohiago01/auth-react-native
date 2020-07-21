import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AuthContext from '../../contexts/auth';
// import { Container } from './styles';

const Dashboard = () => {
  const { user, signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#000', fontSize: 18, padding: 25 }}>{user.name}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={{ color: '#ff0000', fontSize: 18 }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
