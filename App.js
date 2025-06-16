import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
//import { TapGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import CourseInput from './src/components/CourseInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false) 

  const startModal= () => {
    setModalIsVisible=(true);
  }
  return (
   
   
    
    <View style={styles.container}>
      <Button title="Kurs Ekle" color='blue' onPress={startModal}/>
      <StatusBar style="auto" />
      <CourseInput visible={modalIsVisible}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
