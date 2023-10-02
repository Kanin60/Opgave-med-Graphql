import { getPlanets } from "../queries/getPlanets"
import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

export const Mainlayout = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsPlant'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getPlanets)
    })
    console.log(data);

    if (isLoading) return (<div><p>Loading...</p> <BeatLoader color="hsla(168, 0%, 100%, 1)" /></div>)

    if (error) return <p>Der skete en fejl: {error.message}</p>

    return (
        <section>
            <h2>PLANETER</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "2em" }}>
                {data.allPlanets.planets.map((item, index) => {
                    return (
                        <div key={index} style={{ border: "1px solid gray" }}>
                            <p >{item.name}</p>
                            <button><Link to={`/planet/${item.id}`}>Læs mere</Link></button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}