import React, { useContext } from 'react';
import { Image } from 'react-native';

import { styles } from '../styles/style';


export default function ImageUser({pf_photo}:any):JSX.Element {
  return (
    <Image style={styles.image} source={{uri:pf_photo}}/>
    
  );
}
