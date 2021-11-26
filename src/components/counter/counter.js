import { Link } from "react-router-dom"
import {useContext} from 'react'
import Count from "../../store/countProvider"

export default function Counter(){
    const [count,,Addcount] = useContext(Count)
    return(
        <div>  
            <h2>Page one !!</h2>
            <button onClick={Addcount}>Click here</button><br/>
            <p>{count}</p>
            <Link to={`/result`}><button>Next Page</button></Link>
        </div>
    )
}