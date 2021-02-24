import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function GifExpertApp() {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']


    const [categories, setCategories] = useState([''])

    // const handleAdd = () => {
    //     setCategories([...categories,'HunterX'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <h3>Busca tus gifs</h3>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                        key={category}
                        category={category} />
                    )
                }
            </ol>


        </>
    )
}

export default GifExpertApp
