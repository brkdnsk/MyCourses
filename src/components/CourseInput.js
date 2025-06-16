import { StyleSheet, Text, View ,Modal ,Image} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function CourseInput({visible}) {
  return (
    <Modal animationType="slide" visible={visible} >
    <View style={styles.centeredView}>
      <Image source={require('../assets/Images/cblogo.png')}/>
      <TextInput placeholder='Yeni Kurs Ekle'/>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({})