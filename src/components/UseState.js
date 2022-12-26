import React from "react";

import { useState, useEffect, useReducer } from "react";

import axios from "axios";

const initialcount = 0

const initialUser = {userid: "", title: "", body:""}

const initialState = { Number: 0 }

const reducer = (state, action) => {

    switch (action.type) {
        case "INCREMENT":
            return { Number: state.Number + 1 }
        case "DECREMENT":
            return { Number: state.Number - 1 }
        default: return state
    }
}

const UseState = () => {

    const [count, setCount] = useState(initialcount)

    const [user, setUser] = useState(initialUser)

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        document.title = `count:${count}`
    })

    const Countplus = () => {
        setCount(count + 1)

    }

    const Countminus = () => {
        setCount(count - 1)

    }

    const Submit = (e) =>{
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts", user)
        .then(res =>{
            setUser(res)
            console.log(res)
        }).catch(error => {
            setUser(error)
            console.log(error)
        })
       
        console.log("submitted")
    }

    return (

        <div>

            <div> count : {count}</div>
            <button type="button" onClick={Countplus}>Count</button><br></br>
            <button type="button" onClick={Countminus}>Count</button><br></br>
            <form >
                <div>
                    <label>userid:</label>
                    <input type="number" name="userid" value={user.userid} onChange={e => setUser({...user,userid: e.target.value})}></input>
                </div>
                <div>
                    <label>title:</label>
                    <input type="text" name="title" value={user.title} onChange={e => setUser({...user,title: e.target.value})}></input>
                </div>
                <div>
                    <label>body:</label>
                    <input type="body" name="body" value={user.body} onChange={e => setUser({...user,body: e.target.value})}></input>
                </div>
                <div>
                    <button type="button" onClick={Submit}>Submit</button>
                </div>
            </form>

            <div>number :{state.Number}</div>
            <button type="btn" onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
            <button type="btn" onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>

        </div>
    )
}

export default UseState