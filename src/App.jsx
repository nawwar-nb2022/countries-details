
import { useEffect, useState } from "react"
import jsonData from "./data.json"
import Main from "./views/Main"
import Details from "./views/Details"

import Dark from "./assets/Dark"
import Light from "./assets/Light"

import "./App.css"
const App = () => {

  const [data , setData] = useState()

  useEffect(()=>{
    
    setData(jsonData)

  },[])
  
  
  // theme controller 
  // true => light && false => dark
  const  [them , setTheme] = useState(true)


  // page switcher  ==> small project no need to use react router dom
  const [page , setPage] = useState("main")
  const [specific , setSpecific] = useState()

  const ThemeChangeHandler = ()=>{
      setTheme(!them)
  }
  
  if(!data){
    return <>loading... </>
  }
  return (
    <main className={them ? '' : "dark"}>

      <header className="header">
          <h2>Where in the word </h2>

          <div onClick={ThemeChangeHandler} className="themChangeContainer">
              {them ? 
                  <p>
                    <Dark/> Dark Mode
                  </p>
                    :
                  <p> <Light/> Light Mode</p>
              }
          </div>
      </header>
    {page=== "main" ? <Main data={data} setSpecific={setSpecific} setPage={setPage} /> : 
    <Details  specific={specific} setPage={setPage} />}
    </main>
  )
}

export default App
