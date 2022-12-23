import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import HeaderComponent from '../components/headerComponent/header-component'
import AllAnimeComponent from '../components/listViewComponent/listanime-component';
import { AnimeListContext } from '../providers/animeProvider';
import { animeAPI } from '../providers/constants'

export default function Main(props) {








  const data = props.data.data;

  console.log(data);


  const [animeList, setAnimeList] = useContext(AnimeListContext);





  useEffect(() => {
    setAnimeList(data);

    if (!localStorage.getItem("animeList")) {

      localStorage.setItem("animeList", JSON.stringify([]));
    }
  }, [])

  // useEffect(() => {
  //   axios.get(CONSTANTS.serverUrl)
  //     .then(function (res) {
  //       console.log(res)
  //     })
  // }, [])



  return (
    <>
      <HeaderComponent /> <br></br> <br></br>
      <AllAnimeComponent />
    </>
  )
}



export async function getServerSideProps(context) {

  const response = await animeAPI.get("");
  const responseData = await response.data;

  return {
    props: { data: responseData }
  }

}