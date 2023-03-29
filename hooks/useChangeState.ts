import { useState } from "react"

export function useChangeState() {
    const [lock, setLock] = useState(false);
    const [unlock, setUnlock] = useState(false);
  
    const handleChangeLock = (state:any) => setLock(state);
    const handleChangeUnlock = (state:any) => setUnlock(state);
  
    return {lock,unlock,handleChangeLock,handleChangeUnlock}
  }
  
