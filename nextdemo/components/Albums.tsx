'use client';
import React, { useEffect, useState } from 'react'

const Albums = () => {

        const [Albums, setAlbums] = useState([]);

        useEffect(()=>{
            const fetchAlbums = async () =>{
                try {
                    const res = await fetch('https://api.unsplash.com/users/lukeskywalker/photos');

                    const data = await res.json();
                    
                    setAlbums(data);
                    
                } catch (error) {
                    console.log("error fetching album: ", error);
                    
                }
            }
        })

        console.log("hello",Albums);
  return (
    <div>
      <h1>Album </h1>
    </div>
  )
}

export default Albums
