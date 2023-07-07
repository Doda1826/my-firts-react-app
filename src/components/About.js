import React, {useState, useEffect} from "react"

const About = () => {
    const [ count, setCount] = useState(0)
    const [ name, setName ] = useState('')

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        document.title = `this is about, ${name}`
    }, [])

    return (
        <div>
          <input onChange={({target})  => setName(target.value)} value={name} type="text"/>
          <button onClick={increment}>+</button>
          <p>{count}</p>
          <button onClick={decrement}>-</button>
        </div>
    ); 
}

export default About