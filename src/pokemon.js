import { useEffect, useState } from "react";

export function Pokemon(){
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
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
            {pokemonEntries.map((entries , index , arr)=>{
                const pokemonId = index + 1;
                const image = `${imgUrl}${pokemonId}.png`;
                return(
                    <div className="col-md-4 col-6 mb-5" key={pokemonId}>
                        <div className="card">
                            <span className="range">{pokemonId}</span>
                            <div className="card-img">
                                <img src={image} alt={entries.name} className="img-fluid"/>
                            </div>
                            <div className="card-title">
                                <h3>{entries.name}</h3>
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