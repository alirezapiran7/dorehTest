import React,{useState,useEffect} from 'react';
import {View, Text, StatusBar, Dimensions, Image, Alert} from 'react-native';

import CustomFlatList from './component/CustomFlatList';
import axios from 'axios'

//import {data} from './data';

const App: () => React$Node = () => {



  const [data, setdata] = useState([])

  const getData = async()=>{
   
     try{
     
       const res = await axios.get('https://jsonplaceholder.typicode.com/users')
       setdata(res.data)
      
       
     }catch(err){
       console.log('error in axios');
       Alert.alert(err.messate);
     }
  }

  useEffect(() => {
    getData()
  
  },[])

  

  let {width} = Dimensions.get('window');
  return (
    <>
      <StatusBar hidden />
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#D3D3D3',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 3,
          shadowOpacity: 0.5,
        }}>
        <Text
          style={{
            fontSize: 32,
            marginLeft: 16,
            marginTop: 50,
            fontWeight: '200',
          }}>
          Groceries
        </Text>
      </View>
      <CustomFlatList
        style={{marginTop: 8}}
        distanceBetweenItem={12}
        data={data}
        keyExtractor={item => item.index}
        renderItem={data => {
          return (
            <View
              elevation={5}
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 3,
                shadowOpacity: 0.5,
                height: 70,
                width: width - 30,
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 6,
              }}>
              <Card item={data.item} />
            </View>
          );
        }}
      />
      {/* <SafeAreaView /> */}
    </>
  );
};

const Card = ({item}) => {
  
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        source={require('./assets/ali.jpg')  }
        style={{
          width: 40,
          height: 40,
          alignSelf: 'center',
          marginLeft: 10,
          borderRadius: 5,
          borderRadius:20
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent:'space-between',
          height: 50,
          width: '90%',
          marginHorizontal: 10,
          marginVertical: 8,
        }}>
        <Text
          style={{
          
            fontSize: 16,
            fontWeight: '200',
            marginBottom: 4,
            color: '#808080',
          }}>
          {item.name}
        </Text>
        <Text style={{alignItems: 'flex-end' , fontSize: 13,}}>
          {item.email}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 50,
          width: '90%',
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'flex-end',
         
        }}>
        <Text
          style={{
           
            marginBottom: 4,
            fontSize: 18,
            fontWeight: '100',
          
          }}>
          {item.phone}
        </Text>
      </View>
    </View>
  );
};

export default App;