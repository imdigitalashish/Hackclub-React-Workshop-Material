import React from 'react'
import style from "./search-component.module.css"
export default function SearchBox({ anime }) {

    let anime = anime;
    return (
        <>
            {{ anime }}
            <input className={style.searchBox} type="text" />
        </>
    )
}
