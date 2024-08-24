import { useEffect, useState } from "react"
import "./main.css"
import Search from "../assets/Search"
const Main = ({data  , setSpecific, setPage }) => {

    const [countries ,setCountries ] = useState(data)
    const [shownData , setShownData] = useState(data)

    // const [search , setSearch] = useState("")
    // const [filter , setFilter] = useState("")

    const [regionArray , setRegionArray] = useState() 

    useEffect(()=>{
        let ra = []
        countries.map(({region})=>{
                if(!ra.includes(region)){
                    ra.push(region)
                }
        })
        setRegionArray(ra)
    },[])

        const handleFilter = (e)=>{

            const value = e.target.value
            if(value == "all"){
                setShownData(countries)
            }else{
                const newData = countries.filter(data=> value == data.region)
                // console.log(newData)
                setShownData(newData)
            }
        }
        const handleSearch =(e)=>{
            let value = e.target.value 
            let newData = countries

            if(value){
                newData = countries.filter(c => c.name.toLowerCase().includes(value.toLowerCase()))
            }
            setShownData(newData)
        }


        const handleClick = (d)=>{
            setPage(d.name)
            setSpecific(d)
        }   

    return (
        <>
            <div className="main-header">
                <div className="inputContainer">
                        <Search/>
                    
                    <input type="text"
                        placeholder="search by country name"
                        // value={search}
                        onChange={handleSearch}

                    />
                </div>

                <div className="selectContainer">
                    {regionArray && 
                        <select name="region"  onChange={handleFilter} placeholder="filter by region" >
                                <option value="all">all region</option>
                                {regionArray.map((r,rowID)=>{
                                    return <option key={rowID} value={r}>{r}</option>
                                })}
                        </select>
                    }

                </div>
            </div>   


            <div className="countries">
                {shownData.map(d=>{
                    return (<div key={d.name} className="countryData"
                        onClick={()=>handleClick(d)}
                    >
                            <div className="imageContainer">
                                    <img src={d.flags.png} alt={d.name}/>
                            </div>
                            <div className="details">
                                    <h3>{d?.name}</h3>
                                <p>
                                   <span> Population: </span> {d?.population}
                                </p>
                                <p> 
                                    <span> Region: </span> {d?.region}
                                </p>
                                <p>
                                    <span> Capital: </span> {d.capital}
                                </p>
                            </div>
                    </div>)
                })}
                {shownData == [] && <> there is no country with this name</>}
            </div>
        </>
    )
}

export default Main
