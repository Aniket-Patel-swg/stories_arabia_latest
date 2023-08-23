import React, { useState } from 'react'
import styles from '../styles/Clients.module.css'
import imgData from '../Assets/Data/Clients-data.json';

function Clients() {
    const [data, setData] = useState(imgData)

    console.log(data)
  
  console.log(imgData)
  return (
    <>
        <div className={styles.clients_carousel}> 
        <h1>Our clients</h1>
            <section className={styles.clients_wrapper}>
                {data.map((image,index)=>{
                    return(
                        <>
                            <div key={index} className={styles.client_img}>
                                <p>{image.name}</p>
                                <p>{image.path}</p>
                                <img src={image.path} />
                            </div>
                        </>
                    )
                })}
            </section>
        </div>
    </>
  )
}

export default Clients