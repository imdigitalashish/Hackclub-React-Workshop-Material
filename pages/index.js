import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import HeaderComponent from '../components/headerComponent/header-component'
import AllAnimeComponent from '../components/listViewComponent/listanime-component';
import { AnimeListContext } from '../providers/animeProvider';
import { animeAPI } from '../providers/constants'

export default function Main(props) {






  // TODO: Get data from props of server side and set to context







  // useEffect to setAnimeList to data getting from pops





  return (
    <>
      <HeaderComponent /> <br></br> <br></br>
      <AllAnimeComponent />
    </>
  )
}



// TODO: Get data from Server Side Props
