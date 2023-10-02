import { useParams, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { BeatLoader } from "react-spinners";
import { OnePlanet } from "../queries/getOnePlanet";

export const Planet = () => {

    const { id } = useParams()
    console.log("id: ", id);

    const { data, isLoading, error } = useQuery({
        queryKey: ['getOneStarwarsPlanet'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, OnePlanet, { planetId: id })
    })

    console.log("En Enkelt Planet: ", data);

    if (isLoading) return (<div><p>Loading...</p> <BeatLoader color="hsla(168, 0%, 100%, 1)" /></div>)

    if (error) return <p>Der skete en fejl: {error.message}</p>

    return (
        <div>
            <h2>{data.planet.name}</h2>
            <p>Befolkning: {data.planet.population}</p>
            <p>Størrelse: {data.planet.diameter} km</p>
            <p>Klima: {data.planet.climates}</p>
            <p style={{ display: "inline" }}>Terræn:</p>
            {data.planet.terrains.map((item, index) => {
                return (
                    <p style={{ display: "inline" }} key={index}> {item},</p>
                )
            })}
            <div>
                {data.planet.filmConnection.films.map((item, index) => {
                    return (
                        <p key={index}>Planeten er med i filmen "{item.title}"</p>
                    )
                })}
            </div>
            <button><Link to="/">Tilbage</Link></button>
        </div>
    )
}