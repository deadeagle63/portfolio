import { useEffect } from 'react'

const useClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
    
  },[ref])

}
 
export default useClickOutside