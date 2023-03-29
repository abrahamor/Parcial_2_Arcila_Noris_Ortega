import React, { useContext } from 'react';
import { RefreshControlBase, Text, View } from 'react-native';
import { EmployeeContext, EmployeeContextData } from '../imports/employeeContext';
import { styles } from '../styles/style';


export default function InfoUser({nombre,puesto,correo,cel,date}:any):JSX.Element {
    const {} = useContext<EmployeeContextData>(EmployeeContext)    
  return (
   <>
        <View>
            <Text style={styles.text_name}>Nombre: {nombre}</Text>
            <Text style={styles.text_pos}>Puesto: {puesto}</Text>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.text_pos}>Fecha de nacimiento: {date}</Text>
            <Text style={styles.text_pos}>Correo: {correo}</Text>
            <Text style={styles.text_pos}>Numero celular: {cel}</Text>
        </View>
    </> 
  );
}