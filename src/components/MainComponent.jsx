import { useGlobalContext } from "../contexts/GlobalContext"
import MediaList from "./MediaList"
import { useState, useEffect } from "react"
export default function MainComponent() {
    const { movies, series } = useGlobalContext();
    return (
        <main>
            {movies.length < 1 && series.length < 1 ? (
                <h3>Prova a cercare un film o una serie TV!</h3>
            ) : (
                <>
                    <MediaList title="movies" list={movies} key={movies} />
                    <MediaList title="tv series" list={series} key={tv} />
                </>
            )}
        </main>
    )
}