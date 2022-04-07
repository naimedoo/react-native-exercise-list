import React from "react";
import { useEffect, useState } from "react";
import { View , Text, StyleSheet, SafeAreaView, Image} from "react-native";
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
    return (<View><Text>{item}</Text></View>)
  }

  return (

    <FlatList
    data={countries}
      // Première méthode
      // data={countries.map((country) => {
      //   return <View >
      //            <Text style={[styles.containerText,styles.title]}>Country: {country.name.common}</Text>
      //            <Text style={[styles.containerText, styles.title]}>Capital : {country.capital}</Text>
      //            <Image source={{uri:country.flags.svg}}style={{width:150, height: 150}}/>
      //          </View>
      // })}
      renderItem={({item})=> (
        <View>
          <Text style={styles.title}>
            {item.name.common}  :  {item.capital}
          </Text>
          <Image source={{uri:item.flags.svg}} style={{width:150, height:150}} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />

  )
}
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    }
  });