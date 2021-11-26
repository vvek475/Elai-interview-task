import {useContext} from 'react'
import { Link } from 'react-router-dom'
import Count from '../store/countProvider'


export default function Result(){

    const [count,,Addcount] = useContext(Count)
    return (
        <>
        <br/>
        <div className="result">
        <h2>Page two !!</h2>
            <button onClick={Addcount}>Click here</button><br/>
            <p>{count}</p>
            <Link to={`/`}><button>Prev Page</button></Link>
        </div>
        </>
    )
}