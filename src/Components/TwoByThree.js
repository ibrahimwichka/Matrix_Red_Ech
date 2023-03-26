import React from "react";
import {useState} from 'react';
import toRowEchelon from "./toRowEchelon";

const TwoByThree = () => {
    
    const [one_one, setone_one] = useState('')
    const [one_two, setone_two] = useState('')
    const [one_three, setone_three] = useState('')
    const [two_one, settwo_one] = useState('')
    const [two_two, settwo_two] = useState('')
    const [two_three, settwo_three] = useState('')

    const matrix_array = [
        [Number(one_one), Number(one_two), Number(one_three)],
        [Number(two_one), Number(two_two), Number(two_three)]
    ]

    const echelon_output = toRowEchelon(matrix_array)
    
    return (
        <div> 
            <p> Input Entries of Matrix </p>
            <input className = "row_1" type="text" id="one-one" name="one-one" onChange = {(event) => {
                setone_one(event.target.value)
            }}></input>
            <input className = "row_1" type="text" id="one-two" name="one-two"onChange = {(event) => {
                setone_two(event.target.value)
            }} ></input>
            <input className = "row_1" type="text" id="one-three" name="one-three" onChange = {(event) => {
                setone_three(event.target.value)
            }}></input>
            <br></br>
            <br></br>
            <input className = "row_2" type="text" id="two-one" name="two-one" onChange = {(event) => {
                settwo_one(event.target.value)
            }}></input>
            <input className = "row_2" type="text" id="two-two" name="two-two" onChange = {(event) => {
                settwo_two(event.target.value)
            }}></input>
            <input className = "row_2" type="text" id="two-three" name="two-three" onChange = {(event) => {
                settwo_three(event.target.value)
            }}></input>
            <br></br>
            <br></br>
            <h1> Row Echelon Form: </h1>
            <h2> {echelon_output} </h2>
            
            
            
            

        </div> 
    )
}

export default TwoByThree;