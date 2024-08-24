import { useEffect  , useState} from "react"
import ALeft from "../assets/ALeft"
import  "./details.css"
const Details = ({specific , setPage}) => {

    const [borders , setBorders] = useState()
    const [languages , setLanguages] = useState()

    console.log(specific.border  , languages)

    useEffect(()=>{
        // console.log(specific.name , specific)
        if(specific?.borders){
            setBorders(specific.borders)
        }
        if(specific?.languages){
            setLanguages(specific.languages)
        }
    },[languages , borders])
    if(!specific){
        return <>loading </>
    }
    return (
        <>
            <div onClick={()=>setPage("main")} className="arrowBack">
                <ALeft/> Back
            </div>

            <div className="detailContainer">
                    <div className="countryFlag">
                        <img src={specific.flags.png} alt={specific.name}/>
                        
                    </div>

                    <div className="dataSection">
                            <h2>{specific.name}</h2>
                        <div className="dataContainer">
                            <div>
                                <p>
                                    <span>Native Name:</span> {specific.nativeName}
                                </p>
                                <p>
                                    <span>Population:</span> {specific.population}
                                </p>
                                <p>
                                    <span>Region:</span> {specific.region}
                                </p>
                                <p>
                                    <span>Sub Region:</span> {specific.subregion}
                                </p>
                                <p>
                                    <span>Capital:</span> {specific.sucapitalbregion}
                                </p>
                            </div>

                            <div>
                                <p>
                                    <span>Top Level Domain:</span> {specific.topLevelDomain}
                                </p>
                                <p>
                                    <span>currencies :</span> {specific.currencies[0].name}
                                </p>
                                <p>
                                    <span>Languages:</span> <p className="array">
                                            { languages &&
                                            languages?.map(lang=><p key={lang.name}>{lang.name}, </p>)
                                                
                                            }
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="borderData">
                            <span> borders :</span><p > {borders && borders.map(border=>{
                                    return <p className="borders" key={border}> {border} </p>
                                })}

                            </p>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Details