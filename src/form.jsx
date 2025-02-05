import React from "react";
import { useState } from "react";
function Form() {
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    return (
        <form>
            <label For="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <label For="age">Age:</label>
            <input
                type="number"
                id="age"
            
                value={age}
                onChange={(e) => setAge(e.target.value)} />
                <p>{age}</p>
                <p>{age}</p>
        </form>
    )
}
export default Form;