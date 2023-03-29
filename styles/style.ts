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
    error:{
      color:'red'
    },
    right:{
      display:'none'
    },
  });