import React,{useContext, useReducer, useState} from 'react'

interface AuthState {
    loading: boolean,
    token: string | null,
    estado: string,
  }
export interface LoginPayload{
    estado:string
  }
type AuthAction = 
  | { type: 'lock' } 
  | {type: 'unlock',payload:LoginPayload};
  
export const initialStateLock : AuthState = {
      loading: true,
      token: null,
      estado: '',
  }
  
export const authReducer = (state: AuthState , action: AuthAction) : AuthState => {
      switch(action.type) {
          case 'lock':
              
              return {
              ...initialStateLock,
              estado:'lock',
              loading: false,
          };
          case 'unlock':
              const {estado} = action.payload
              return {
                  loading: false,
                  token: 'ABC123',
                  estado,
              };
          default:
          return state;
      }
  }