import { createContext ,useState } from 'react';

const Count=createContext()

export function CountParent({children}){
    const [count,setcount]=useState(0)
    function AddCount(){
        setcount(count+1)
    }
    return (
        <Count.Provider value={[count,setcount,AddCount]}>
            {children}
        </Count.Provider>
    )
}
export default Count