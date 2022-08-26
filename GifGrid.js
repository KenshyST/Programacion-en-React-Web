import { useEffect, useState } from "react"

export const GifGrid = ({category}) => {
    useEffect( () => {
        console.log(category)
    }, []) // En este caso como esta vacio se genera cuando se ejecuta una sola vez el proyecto
    return(
        <>
        <h3> {category} </h3>
        
        </>
    )
}