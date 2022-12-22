import Link from 'next/link';
import React from 'react'
import SearchBox from '../searchComponent/search-component';
import style from "./headerComponent.module.css";
export default function HeaderComponent() {
  return (
    <div className={style.container}>
      <Link href={"track"} className={style.headerStyle}>Anime List</Link>
      <h1 className={style.headerStyle}>Anime Tracker</h1>

      <div className={style.searchBox}>
        <SearchBox anime={"hoi"} />
      </div>
    </div>
  )
}
