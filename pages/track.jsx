import React, { useContext, useEffect, useState } from 'react'


import style from "./track.module.css";


export default function TrackScreen() {



    return (
        <>

            <h1 style={{ display: "flex", justifyContent: "center" }}>My Anime List</h1>

     
        </>
    )
}




// <div key={index} className={style.card}>
// <div className="cardImage">
//     <img style={{ height: "170px", width: "130px", objectFit: "cover" }} src={elem.images.jpg.image_url} alt="" />
// </div>
// <div className={style.cardTitle}>
//     <p>{elem.title}</p>
// </div>
// <div>
//     <div style={{ paddingRight: "20px", width: "10%", "paddingTop": "50px", "display": "flex" }}>


//         {
//             elem.currentEpisode != elem.episodes &&

//             <i
//                 onClick={() => {
//                     incrementEpisodeNumber(index);
//                 }}
//                 className="fa-solid fa-circle-plus" style={{ color: "orange", transform: "scale(1.5)" }}></i>

//         }




//         {
//             elem.currentEpisode != 0 &&

//             <i
//                 onClick={() => {
//                     decrementEpisode(index);
//                 }}
//                 className="fa-solid fa-circle-minus"
//                 style={{ color: "orange", transform: "scale(1.5)", marginLeft: "20px" }}></i>

//         }

//         <i

//             onClick={() => {
//                 removeFromTheList(index);
//             }}
//             className="fa-solid fa-trash" style={{ color: "orange", transform: "scale(1.5)", marginLeft: "20px" }}></i>

//     </div>

//     <div style={{ paddingRight: "12px" }}>
//         <p>Progress</p>
//         <p>{elem.currentEpisode}/{elem.episodes}</p>
//     </div>
// </div>
// </div >
