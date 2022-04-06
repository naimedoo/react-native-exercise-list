import React from "react";
import { useEffect, useState } from "react";
import { View } from "react-native";
// import { FlatList } from "react-native-web";


export default function List() {
    const [countries,setCountries] = useState([])
   
    useEffect(()=>{ 
    const URL= 'https://restcountries.com/v3.1/all'
        fetch(URL)
        .then(res => res.json())
        .then(res => console.log("res ===>", res))
    }, [])
//   const renderItem = ({item}) => {
//       return <View><Text>{item.name}</Text></View>
//   }
    
    return (
      <View></View>
        // <FlatList 
        //   data={res.data}
        //   renderItem={renderItem}
        //    />

        
    )
}