import {useState} from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GiftExpertApp = () =>{
    const [categories, setCategories] = useState(['First Category'])
    

    const onAddCategory = (category) =>{
        setCategories(list => [...list, category])

    }
    return (
        <>
        <h1> GiftExpert </h1>
        <AddCategory onAddCategory={onAddCategory}> </AddCategory>
        {
         categories.map(
                (category, key) =>
                {
                    return <GifGrid category = {category} key={key} />
                }
        )
    }
        </>
        
    )
}