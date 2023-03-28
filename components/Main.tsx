import React,{ useState } from 'react'
import { Text, Button, TextInput, View,ScrollView, Platform, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { styles } from '../styles/style';
import DatePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import { EmployeeContext, EmployeeContextData, initialState } from '../imports/employeeContext';

import useForm from '../hooks/useForm';


const Main = () => {

  const [employee, handleChange] = useForm(initialState);


  const contextData:EmployeeContextData={
    data: employee,
    handleChange
}
  const {userName, telefono,email,bg_photo,puesto} = employee
  
  const data = [
      {key: 1, value: 'Gerente'},
      {key: 2, value: 'Desarrolador Jr'},
      {key: 3, value: 'Desarrolador Sr'},
      {key: 4, value: 'Soporte'},
      {key: 5, value: 'Lider de Proyecto'},
  ];

  const [show,setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode,setMode] = useState('date');
  const [fecha,setFecha] = useState('Fecha de nacimiento');
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png');
  
  const onChange = (event: any,selectedDate: any) =>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS  === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
    setFecha(fDate);
  }

  const showMode = (currentMode:any) => {
    setShow(true);
    setMode(currentMode);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return(
    <EmployeeContext.Provider value={contextData}>
      <ScrollView style={styles.father}>
        <View >
          <Text style={{marginTop:20}}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder='Name'
            value={userName}
            onChangeText={(value: string) => handleChange('userName', value)}
          />

          <Text>Fecha de nacimiento</Text>
          <View style={styles.fecha}>
            <Text style={styles.fecha_text}>{fecha}</Text>
          </View>
          <View style={{margin:10}}>
            <Button
              title='Fecha de nacimiento'
              onPress={()=>showMode('date')}
            />
          </View>
          {show && <DatePicker
            testID='datepicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
          />}
      

          <Text>Puesto</Text>
          <SelectList 
            setSelected={(value:any) => handleChange('puesto', value)} 
            data={data} 
            save='value'
            boxStyles={{margin: 12}}
          />

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={(value: string) => handleChange('email', value)}
          />

          <Text >Teléfono</Text>
          <TextInput
            style={styles.input}
            placeholder='Teléfono'
            value={telefono}
            onChangeText={(value: string) => handleChange('telefono', value)}
          />
            
          <TouchableOpacity style={styles.panelButton} onPress={pickImage}>
            <Text style={styles.panelButtonTitle} >Escoge foto de perfil</Text>
          </TouchableOpacity>
       
          <View style={styles.buttons}>
           

            <Button title='Bloquear'/>
            <Button title='Desbloquear'/>
          </View>

  
        </View> 
      </ScrollView>
    </EmployeeContext.Provider>
  )
}

export default Main;