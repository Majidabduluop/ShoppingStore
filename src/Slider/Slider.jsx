import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'

function Slider() {

    const slide = useSelector(state => state.slider.value);
    return (

        <>

            <div></div>

        </>


    )
}

export default Slider