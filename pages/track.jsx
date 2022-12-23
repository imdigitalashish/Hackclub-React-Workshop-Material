import React, { useContext, useEffect, useState } from 'react'
import { AnimeListContext } from '../providers/animeProvider';


import style from "./track.module.css";


export default function TrackScreen() {


    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("animeList")));
        // console.log(data);
    }, [])


    let incrementEpisodeNumber = (index) => {

        let dataCopy = JSON.parse(JSON.stringify(data));
        let itemToUpdate = dataCopy[index];
        itemToUpdate.currentEpisode += 1;
        console.log(dataCopy);


        localStorage.setItem("animeList", JSON.stringify(dataCopy));
        setData(dataCopy)
    }

    let decrementEpisode = (index) => {

        let dataCopy = JSON.parse(JSON.stringify(data));
        let itemToUpdate = dataCopy[index];
        itemToUpdate.currentEpisode -= 1;
        console.log(dataCopy);

        localStorage.setItem("animeList", JSON.stringify(dataCopy));
        setData(dataCopy)

        // NEXT OPTION;
        // let dataCopy = JSON.parse(JSON.stringify(data));


    }


    let removeFromTheList = (index) => {
        let dataCopy = JSON.parse(JSON.stringify(data));
        dataCopy.splice(index, 1)
        setData(dataCopy);
        localStorage.setItem("animeList", dataCopy);
    }


    return (
        <>

            <h1 style={{ display: "flex", justifyContent: "center" }}>My Anime List</h1>

            {
                data.map((elem, index) => {
                    console.log(elem);
                    return (
                        <div key={index} className={style.card}>
                            <div className="cardImage">
                                <img style={{ height: "170px", width: "130px", objectFit: "cover" }} src={elem.images.jpg.image_url} alt="" />
                            </div>
                            <div className={style.cardTitle}>
                                <p>{elem.title}</p>
                            </div>
                            <div>
                                <div style={{ paddingRight: "20px", width: "10%", "paddingTop": "50px", "display": "flex" }}>


                                    {
                                        elem.currentEpisode != elem.episodes &&

                                        <i
                                            onClick={() => {
                                                incrementEpisodeNumber(index);
                                            }}
                                            className="fa-solid fa-circle-plus" style={{ color: "orange", transform: "scale(1.5)" }}></i>

                                    }




                                    {
                                        elem.currentEpisode != 0 &&

                                        <i
                                            onClick={() => {
                                                decrementEpisode(index);
                                            }}
                                            className="fa-solid fa-circle-minus"
                                            style={{ color: "orange", transform: "scale(1.5)", marginLeft: "20px" }}></i>

                                    }

                                    <i

                                        onClick={() => {
                                            removeFromTheList(index);
                                        }}
                                        className="fa-solid fa-trash" style={{ color: "orange", transform: "scale(1.5)", marginLeft: "20px" }}></i>

                                </div>

                                <div style={{ paddingRight: "12px" }}>
                                    <p>Progress</p>
                                    <p>{elem.currentEpisode}/{elem.episodes}</p>
                                </div>
                            </div>
                        </div >
                    )
                })
            }




        </>
    )
}
