import React, { useState, useEffect } from 'react'
import styles from '../styles/Clients.module.css'

function Clients() {

    const [count, setCount] = useState(0)
    const [data, setData] = useState([
        {
            "name" : "Almarai",
            "path" : "/Assets/Images/Almarai.png"
        },
        {
            "name": "Black_decker",
            "path" : "/Assets/Images/Black_decker.png"
        },
        {
            "name": "Centara",
            "path" : "/Assets/Images/Centara.png"
        },
        ,
        {
            "name": "Centro",
            "path" : "/Assets/Images/Centro.png"
        },
        {
            "name": "Circle_mall",
            "path" : "/Assets/Images/Circle_mall.png"
        },
        {
            "name": "Delage",
            "path" : "/Assets/Images/Delage.png"
        },
        {
            "name": "Dragon_mart",
            "path" : "/Assets/Images/Dragon_mart.png"
        },
        {
            "name": "Honor",
            "path" : "/Assets/Images/Honor.png"
        },
        {
            "name": "Meydon",
            "path" : "/Assets/Images/Meydon.png"
        },
        {
            "name": "Rotana Media",
            "path" : "/Assets/Images/Rotana_media.png"
        },
        {
            "name": "Souk Al Marfa",
            "path" : "/Assets/Images/Souk_Al_marfa.png"
        },
        {
            "name": "Stregis",
            "path" : "/Assets/Images/Stregis.png"
        },
        {
            "name": "Centro",
            "path" : "/Assets/Images/Centro.png"
        }
    ])
  
    useEffect(()=>{
        setTimeout(()=>{

            if(count === data.length){
                setCount(0)
            }
            else{
                setCount(count + 1)
            }
        },1500)
    })
  return (
    <>
        <div className={styles.clients_carousel}> 
        <h1>Our clients</h1>
            <section className={styles.clients_wrapper}>
                {data.map((image,index)=>{
                    return(
                        <>
                            <div style={{transform : `translate(-${count * 100}%)`}} key={index} className={styles.client_img}>
                                {/* <p>{image.name}</p> */}
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