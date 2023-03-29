import React from 'react';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    father:{
      maxHeight:500
    },
    textContainer:{
      backgroundColor: 'white',
      borderColor:'thistle',
      borderRadius:15,
    },
    top:{
      padding:10,
      flexWrap:'wrap',
      flexDirection:'row',
    }, 
    bottom:{
      marginTop:5,
      flexWrap:'wrap',
      flexDirection:'row',
    },
    text:{
      fontSize:20,
      color:'white',
      textShadowColor:'#585858',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:5
    },
    text_name:{
      fontSize:25,
      color:'white',
      textShadowColor:'#585858',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:5,
      paddingLeft:10,

    },
    text_pos:{
      fontSize:15,
      color:'white',
      textShadowColor:'#585858',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:5,
      paddingLeft:10,

    },
    image:{
      width:50,
      height:50,
      borderRadius:5
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    buttons:{
      display:'flex',
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      gap:10,
      marginBottom:15
    },
    error:{
      color:'red'
    },
    right:{
      display:'none'
    },
    fecha:{
      margin: 12,
      flex: 1,
      borderWidth:1,
      borderColor:'black',
    },
    fecha_text:{
        fontSize:18,
        left:5,
        margin:5
    },
    panelButton: {
      padding: 8,
      borderRadius: 3,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
  }); 



