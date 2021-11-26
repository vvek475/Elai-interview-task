import {useContext} from 'react'
import { Link } from 'react-router-dom'
import Count from '../store/countProvider'


export default function Result(){

    const [count] = useContext(Count)
    return (
        <div className="result">
            <p>{count}</p>
            <Link to={`/`}><button>Prev Page</button></Link>
        </div>
    )
}