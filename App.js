import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  FlatList
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';
import allActions from "./redux/actions";


export default App=({navigation})=>{
  const currentState = useSelector(state=>state.CurrentProduct)
  const dispatch = useDispatch();

  addToCart=(item_)=>{
    console.log(item_)
    dispatch(allActions.ProductActions.product(item_))
    
  }

  return(
    <View style={style.mainContainer}>
      <View style={style.topNavContainer}>
        <TouchableHighlight underlayColor="transparant" onPress={()=>navigation.navigate("Cart")}>
          <View style = {{flexDirection:'row'}}>
            <View style={style.bubble}>
              <Text style={{color:'#ffffff'}}>{currentState.numberCart}</Text>
            </View>
            <Icon name="cart" size={30} style={{marginRight:20}} />
          </View>
          
        </TouchableHighlight>
      </View>
      <View>

      
      <FlatList
        data={[  
            {id:1,name: 'Book 1',},
            {id:2,name: 'Book 2',}, 
            {id:3,name: 'Book 3',},
            {id:4,name: 'Book 4',},
            {id:5,name: 'Book 5',}   
        ]}  
        renderItem={({item}) =>  
            <View style={style.itemContainer}>
              
                <Image style={{height:100,width:100,borderRadius:5}} source={require('./assets/Book.jpg')} />
                <View style={{marginLeft:20}}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#000000'}}>{item.name}</Text>
                  <TouchableHighlight onPress={()=>this.addToCart(item)} style={style.button}>
                    <Text style={{fontSize:12,color:'#ffffff'}}>Add + </Text>
                  </TouchableHighlight>
                </View>
            </View>}        
        /> 

        </View> 
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer:{
    height:'100%',
    width:'100%',
  },
  topNavContainer:{
    height:50,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  bubble:{
    height:30,
    width:30,
    backgroundColor:'red',
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },
  itemContainer: {  
    height:120,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    margin:10,
    padding:5,
    backgroundColor:'#eeeeee',
    borderRadius:5,
    elevation:2,
  }, 
  button:{
    height:30,
    width:70,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    borderRadius:5,
  } 
})