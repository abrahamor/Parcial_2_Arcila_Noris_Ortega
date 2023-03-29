import React,{useContext, useEffect, useReducer, useState} from 'react'
import { Text, Button, TextInput, StyleSheet, View, ImageBackground, ScrollView, Platform, TouchableOpacity } from 'react-native';
import useForm from '../hooks/useForm';
import { EmployeeContext, EmployeeContextData, initialState } from '../imports/employeeContext';
import { SelectList } from 'react-native-dropdown-select-list'
import { styles } from '../styles/style';
import DatePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import { useChangeState } from '../hooks/useChangeState';
import { authReducer, initialStateLock, LoginPayload } from '../imports/reduce';
import UserCard from './UserCard';

const Main = () => {

  const [employee, handleChange] = useForm(initialState);
  const {lock,handleChangeLock,handleChangeUnlock} = useChangeState()


  const default_image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
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

  const [{loading,estado,token}, dispatch] = useReducer(authReducer, initialStateLock)
  const [show,setShow] = useState(false);
  const [errors,setErrors] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode,setMode] = useState('date');
  const [fecha,setFecha] = useState('Fecha de nacimiento');
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png');

  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [cel, setCel] = useState('');
  const [correo, setCorreo] = useState('');
  const [img,setImg] = useState('');
  const [fecha_stat,setFechastat] = useState('');
  const [message,setMessage] = useState('');

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

  const login = (state:any) => {
          if(state == 'lock'){
            handleChangeUnlock(false)
            if(userName == '' || email == '' || telefono == '' || puesto == 0 || fecha == '' || image == default_image){
              setNombre('');
              setCorreo('');
              setCel('');
              setCargo('');
              setImg(default_image)
              setFechastat('');
              setErrors(true)
            }else{
              setNombre(userName);
              setCorreo(email);
              setCel(telefono);
              setImg(image)
              setFechastat(fecha);
              setErrors(false)
              setMessage('La información se guardó con exito')
              setTimeout(()=> setMessage('') ,3000);

              if(puesto == ''){
                setCargo('')
              }else{
                setCargo(puesto)
              }
            }
        }
        if(state == 'unlock'){
            handleChangeLock(false)
        }
      
      const payload:LoginPayload = {
          estado:state
      }
      dispatch({type:state,payload})
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
          <Text style={userName == '' ? styles.error : styles.right}>El nombre no puede estar vacio</Text>

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
      
          <Text style={fecha == 'Fecha de nacimiento' ? styles.error : styles.right}>La fecha no puede estar vacia</Text>

          <Text>Puesto</Text>
          <SelectList 
            setSelected={(value:any) => handleChange('puesto', value)} 
            data={data} 
            save='value'
            boxStyles={{margin: 12}}
          />
          <Text style={puesto == 0 ? styles.error : styles.right}>Seleccione alguna opción</Text>

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={(value: string) => handleChange('email', value)}
          />
          <Text style={email == '' ? styles.error : styles.right}>El correo no puede estar vacio</Text>

          <Text >Teléfono</Text>
          <TextInput
            style={styles.input}
            placeholder='Teléfono'
            value={telefono}
            onChangeText={(value: string) => handleChange('telefono', value)}
          />
          <Text style={telefono == '' ? styles.error : styles.right}>El telefono no puede estar vacio</Text>
            
          <TouchableOpacity style={styles.panelButton} onPress={pickImage}>
            <Text style={styles.panelButtonTitle} >Escoge foto de perfil</Text>
          </TouchableOpacity>
          <Text style={image == default_image ? styles.error : styles.right}>Escoja una foto de perfil</Text>
       
          <View style={styles.buttons}>
           

            <Button title='Bloquear' onPress={()=>{login('lock'); handleChangeLock(true)}}/>
            <Button title='Desbloquear' onPress={()=>{login('unlock'); handleChangeUnlock(true)}}/>
          </View>
          {errors   && !token  && <Text style={styles.error}>No es posible generar la tarjeta, hay errores en el formulario</Text>}
          {loading  && !token  && <Text>Estado: desbloqueado</Text>}
          {!loading && !errors && !token && <Text style={{color:'green'}}>{message}</Text>}
          {!loading && !errors && !token && <Text>Estado: bloqueado</Text>}
          {!loading && token   && <Text>Estado: desbloqueado</Text>}
	  <UserCard nombre = {lock ? nombre  : userName} puesto={lock ? cargo  : puesto == 0 ? '' : puesto} correo={lock ?  correo : email} cel={lock ?  cel : telefono} date={lock ? fecha_stat : fecha == 'Fecha de nacimiento' ? '' : fecha} bg_photo={bg_photo} pf_photo={lock ? img : image}/> 
        </View> 
      </ScrollView>
    </EmployeeContext.Provider>
  )
}

export default Main;