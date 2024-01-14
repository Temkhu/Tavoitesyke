import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('');
  const [up, setUp] = useState('');
  const [low, setLow] = useState('');

    const hr = () => {
      result1 = Math.round((220 - age.replace(',','.')) * 0.65);
      result2 = Math.round((220 - age.replace(',','.')) * 0.85);

      setUp(result2);
      setLow(result1);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
      style={styles.reuna}
      keyboardType='number-pad'
      value={age}
      onChangeText={text => setAge(text)}
      onSubmitEditing={hr}
      />
      <Text style={styles.field}>Hr Limit</Text>
      <Text style={styles.field}>{low} - {up}</Text>
      <Button title ="Calculate" onPress={hr}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 8,
  },
  field: {
    marginBottom: 8,
  },
  reuna:{
    borderColor: 'lightblue',
    borderWidth: 3,
    borderRadius: 2,
    padding: 2,
    marginBottom: 2,
    paddingLeft: 4,
  }
});
