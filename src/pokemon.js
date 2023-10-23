import { useEffect, useState } from "react";

export function Pokemon(){
    const[pokemonEntries,setPokemonEntries] = useState([]);
    const[next,setNext] = useState(null);
    const[previous,setPrevious] = useState(null);
    async function getData(url){
        const data = await fetch(url);
        const dataJson = await data.json();
        setPokemonEntries(dataJson.results);
        setNext(dataJson.next);
        setPrevious(dataJson.previous);
    }
    useEffect(()=>{
        getData("https://pokeapi.co/api/v2/pokemon");
    },[]);

    function NextPage(){
        return getData(next);
    };
    function NextPrevious(){
        return getData(previous);
    }
    return(
        <>
            {pokemonEntries.map((entries , index)=>{
                return(
                    <div className="col-6" key={index}>
                        <div className="card">
                            <div className="card-title">
                            {entries.name}
                            </div>
                        </div>                  
                    </div>
                )               
            })}
            <div className="d-flex justify-content-between">
                {previous && <button className="btn btn-primary" onClick={NextPrevious}>Previous</button>}
                {next && <button className="btn btn-primary" onClick={NextPage}>Next</button>}
            </div> 
        </>               
    )
}