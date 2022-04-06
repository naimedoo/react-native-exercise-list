import React from "react";
import { useEffect, useState } from "react";
import { View , Text, StyleSheet, SafeAreaView} from "react-native";
import { FlatList } from "react-native";



export default function List() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const URL = 'https://restcountries.com/v3.1/all'
    fetch(URL)
      .then(res => res.json()) 
      .then(res => { console.log("res ===>", res)
    
        setCountries(res)
    })
  }, [])
    const renderItem = ({ item }) => {
    return (<View><Text style={[styles.title, styles.textCenter]}>{item}</Text></View>)
  }

  return (

    <FlatList
      data={countries.map((country) => {
          return country.name.common + ': ' + country.capital
      })}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />

  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },


});