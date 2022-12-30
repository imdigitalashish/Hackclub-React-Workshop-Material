import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import HeaderComponent from '../components/headerComponent/header-component'
import AllAnimeComponent from '../components/listViewComponent/listanime-component';
import { AnimeListContext } from '../providers/animeProvider';
import { animeAPI } from '../providers/constants'

export default function Main(props) {


  const data = props.data.data;



  const [animeList, setAnimeList] = useContext(AnimeListContext);





  useEffect(() => {
    setAnimeList(data);

    console.log(data);

    if (!localStorage.getItem("animeList")) {

      localStorage.setItem("animeList", JSON.stringify([]));
    }
  }, [])






  // useEffect to setAnimeList to data getting from pops





  return (
    <>
      <HeaderComponent /> <br></br> <br></br>
      <AllAnimeComponent />
    </>
  )
}



// TODO: Get data from Server Side Props
export async function getServerSideProps(context) {
  const response = await animeAPI.get("");
  const responseData = await response.data;

  console.log(response);  

  return {
    props: { data: responseData }
  }

}