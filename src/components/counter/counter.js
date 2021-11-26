import { Link } from "react-router-dom"
import {useContext} from 'react'
import Count from "../../store/countProvider"

export default function Counter(){
    const [count,,Addcount] = useContext(Count)
    return(
        <div>  
            <p>{count}</p>
            <button onClick={Addcount}>Click here</button>
            <Link to={`/result`}><button>Next Page</button></Link>
        </div>
    )
}