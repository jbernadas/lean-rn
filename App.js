import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import InventoryAlerts from './components/InventoryAlerts';

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'top',
          backgroundColor: 'green',
        }}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 45,
            color: '#fff',
            zIndex: 1000,
            paddingTop: 20,
            paddingBottom: 30,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
          }}>
          Lean Prepper
        </Text>
        <InventoryAlerts />
      </View>
    );
  }
}

export default App;