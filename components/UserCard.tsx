import React, { useContext } from 'react';
import { ImageBackground,View } from 'react-native';
import { styles } from '../styles/style';
import ImageUser from './ImageUser';
import InfoUser from './InfoUser';


export default function UserCard({nombre,puesto,correo,cel,date,bg_photo,pf_photo}:any):JSX.Element {
  
  return (
    <View style={styles.textContainer}>   
            <ImageBackground style={{padding:15}} imageStyle={{borderRadius:15}} source={{uri:bg_photo}}>
              <View style={styles.top}>
                  <ImageUser pf_photo={pf_photo}/>
                  <InfoUser  puesto={puesto} correo={correo} nombre={nombre} cel={cel} date={date}/>
              </View> 
            </ImageBackground>

          </View>
  );
}

