import React from "react";
import {useState} from 'react';
import toRowEchelon2 from "./toRowEchelon2";

const ThreeByFour = () => {
    
    const [one_one, setone_one] = useState('')
    const [one_two, setone_two] = useState('')
    const [one_three, setone_three] = useState('')
    const [one_four, setone_four] = useState('')
    const [two_one, settwo_one] = useState('')
    const [two_two, settwo_two] = useState('')
    const [two_three, settwo_three] = useState('')
    const [two_four, settwo_four] = useState('')
    const [three_one, setthree_one] = useState('')
    const [three_two, setthree_two] = useState('')
    const [three_three, setthree_three] = useState('')
    const [three_four, setthree_four] = useState('')

    const matrix_array = [
        [Number(one_one), Number(one_two), Number(one_three), Number(one_four)],
        [Number(two_one), Number(two_two), Number(two_three), Number(two_four)],
        [Number(three_one), Number(three_two), Number(three_three), Number(three_four)]
    ]

    const echelon_output = toRowEchelon2(matrix_array)
    
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
            <input className = "row_1" type="text" id="one-four" name="one-four" onChange = {(event) => {
                setone_four(event.target.value)
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
            <input className = "row_2" type="text" id="two-four" name="two-four" onChange = {(event) => {
                settwo_four(event.target.value)
            }}></input>
            <br></br>
            <br></br>
            <input className = "row_3" type="text" id="three-one" name="three-one" onChange = {(event) => {
                setthree_one(event.target.value)
            }}></input>
            <input className = "row_3" type="text" id="three-two" name="three-two" onChange = {(event) => {
                setthree_two(event.target.value)
            }}></input>
            <input className = "row_3" type="text" id="three-three" name="three-three" onChange = {(event) => {
                setthree_three(event.target.value)
            }}></input>
            <input className = "row_3" type="text" id="three-four" name="three-four" onChange = {(event) => {
                setthree_four(event.target.value)
            }}></input>
            <br></br>
            <br></br>
            <h1> Row Echelon Form: </h1>
            <h2> {echelon_output} </h2>
            
            
            
            

        </div> 
    )
}

export default ThreeByFour;