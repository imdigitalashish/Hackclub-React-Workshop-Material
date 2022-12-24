



import React, { useContext } from 'react'
import { AnimeListContext } from '../../providers/animeProvider';


import style from "./listviewcomponent.module.css";

export default function MainScreenCard(props) {

    // GET ANIME LIST CONTEXT




    // TODO: CREATE FUNCTION TO ADD ITEM TO LIST

    










    let { e, index } = props;

    index = 0;
    e = {
        "mal_id": 5,
        "url": "https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira",
        "images": {
            "jpg": {
                "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.jpg",
                "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.jpg",
                "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.jpg"
            },
            "webp": {
                "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.webp",
                "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.webp",
                "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.webp"
            }
        },
        "trailer": {
            "youtube_id": "hc7IxJ93jtM",
            "url": "https://www.youtube.com/watch?v=hc7IxJ93jtM",
            "embed_url": "https://www.youtube.com/embed/hc7IxJ93jtM?enablejsapi=1&wmode=opaque&autoplay=1",
            "images": {
                "image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/default.jpg",
                "small_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/sddefault.jpg",
                "medium_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/mqdefault.jpg",
                "large_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/hqdefault.jpg",
                "maximum_image_url": "https://img.youtube.com/vi/hc7IxJ93jtM/maxresdefault.jpg"
            }
        },
        "approved": true,
        "titles": [
            {
                "type": "Default",
                "title": "Cowboy Bebop: Tengoku no Tobira"
            },
            {
                "type": "Synonym",
                "title": "Cowboy Bebop: Knockin' on Heaven's Door"
            },
            {
                "type": "Japanese",
                "title": "カウボーイビバップ 天国の扉"
            },
            {
                "type": "English",
                "title": "Cowboy Bebop: The Movie"
            },
            {
                "type": "German",
                "title": "Cowboy Bebop: Der Film"
            },
            {
                "type": "Spanish",
                "title": "Cowboy Bebop: La Película"
            },
            {
                "type": "French",
                "title": "Cowboy Bebop: Le Film"
            }
        ],
        "title": "Cowboy Bebop: Tengoku no Tobira",
        "title_english": "Cowboy Bebop: The Movie",
        "title_japanese": "カウボーイビバップ 天国の扉",
        "title_synonyms": [
            "Cowboy Bebop: Knockin' on Heaven's Door"
        ],
        "type": "Movie",
        "source": "Original",
        "episodes": 1,
        "status": "Finished Airing",
        "airing": false,
        "aired": {
            "from": "2001-09-01T00:00:00+00:00",
            "to": null,
            "prop": {
                "from": {
                    "day": 1,
                    "month": 9,
                    "year": 2001
                },
                "to": {
                    "day": null,
                    "month": null,
                    "year": null
                }
            },
            "string": "Sep 1, 2001"
        },
        "duration": "1 hr 55 min",
        "rating": "R - 17+ (violence & profanity)",
        "score": 8.38,
        "scored_by": 199967,
        "rank": 183,
        "popularity": 584,
        "members": 348465,
        "favorites": 1381,
        "synopsis": "Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator.\n\nWith lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized.\n\n[Written by MAL Rewrite]",
        "background": null,
        "season": null,
        "year": null,
        "broadcast": {
            "day": null,
            "time": null,
            "timezone": null,
            "string": null
        },
        "producers": [
            {
                "mal_id": 14,
                "type": "anime",
                "name": "Sunrise",
                "url": "https://myanimelist.net/anime/producer/14/Sunrise"
            },
            {
                "mal_id": 23,
                "type": "anime",
                "name": "Bandai Visual",
                "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
            }
        ],
        "licensors": [
            {
                "mal_id": 15,
                "type": "anime",
                "name": "Sony Pictures Entertainment",
                "url": "https://myanimelist.net/anime/producer/15/Sony_Pictures_Entertainment"
            }
        ],
        "studios": [
            {
                "mal_id": 4,
                "type": "anime",
                "name": "Bones",
                "url": "https://myanimelist.net/anime/producer/4/Bones"
            }
        ],
        "genres": [
            {
                "mal_id": 1,
                "type": "anime",
                "name": "Action",
                "url": "https://myanimelist.net/anime/genre/1/Action"
            },
            {
                "mal_id": 24,
                "type": "anime",
                "name": "Sci-Fi",
                "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
            }
        ],
        "explicit_genres": [],
        "themes": [
            {
                "mal_id": 50,
                "type": "anime",
                "name": "Adult Cast",
                "url": "https://myanimelist.net/anime/genre/50/Adult_Cast"
            },
            {
                "mal_id": 29,
                "type": "anime",
                "name": "Space",
                "url": "https://myanimelist.net/anime/genre/29/Space"
            }
        ],
        "demographics": [],
        "currentEpisode": 1
    }

    return (
        <div className={style.card}>
            <div className={style.hiddenOverlay}>

                <h1 style={{ color: "white" }}>{e.title}</h1>
                <br /> <h2 style={{ color: "white" }}>{e.duration}</h2>

            </div>

            <div className="hiddenContent"></div>
            <img src={e.images.jpg.image_url} alt="" />
            <button onClick={() => addItemToList(index)}>Add to List</button>
        </div>
    )
}
