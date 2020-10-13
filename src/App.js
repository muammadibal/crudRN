import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CallAPIAxios from './pages/CallAPIAxios'
import CallAPIVanilla from './pages/CallAPIVanilla'
import LocalAPI from './pages/LocalAPI'

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <CallAPIVanilla/> */}
        {/* <CallAPIAxios/> */}
        <LocalAPI/>
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
