import {ChangeEventHandler, createContext} from 'react'

export interface EmployeeForm {
    userName: string,
    puesto: number,
    email:string,
    telefono:string,
    bg_photo:string,
  }
  
 export const initialState: EmployeeForm = {
    userName: '',
    puesto: 0,
    email:'',
    telefono:'',
    bg_photo:'https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-black-business-atmosphere-business-card-background-image_243092.jpg',
  }

export interface EmployeeContextData {
    handleChange: Function | null,
    data: EmployeeForm,

}

const contextData:EmployeeContextData={
    data: initialState,
    handleChange: null,
}

export const EmployeeContext = createContext<EmployeeContextData>(contextData)