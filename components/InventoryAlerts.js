import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class InventoryAlerts extends React.Component {
  render() {
    return (
      <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Inventory Alerts"
          placeholderTextColor="black"
          numberOfLines={10}
          multiline={true} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  textAreaContainer: {
    paddingTop: 30,
    width: 300,
  },
  textArea: {
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
    fontSize: 22,
    height: 250,
    justifyContent: "flex-start"
  }
})

export default InventoryAlerts;