import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import './App.css'
import Home from "./Home"
import JobDescription from "./JobDescription"

function App() {
const [joblist, setJoblist] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

const API_JOB_LIST = "https://remotive.com/api/remote-jobs?limit=100"

const apiCall = async () => {
  setLoading(true)
  setError(false)
  try{
  const result = await fetch(API_JOB_LIST)
  const data = await result.json()
  setJoblist(data.jobs)
  }
catch(err){
  console.log(err)
  setError(true)
}
finally{
setLoading(false)
}}

useEffect(() => { apiCall() }, []);

if(loading) return <h2 className="text-3xl font-bold text-center">Loading...</h2>
if(error) return <h1 className="text-red-500 font-bold">Error, Please check your internet and Refresh Page!</h1>

  return (
      <div className="flex flex-col h-screen">
        <div> <h1 className="text-blue-900 text-left font-bold inline">Esteban's Indeed</h1><Link to="/"><h2 className="text-xl underline decoration-blue-800 inline p-5">Home</h2></Link> </div>
        <div className="flex-1 overflow-hidden">
          <Routes>
  <Route path="/" element={<Home joblist={joblist}/>} >

  <Route path=":id" element={<JobDescription joblist={joblist} />} />

 </Route>
  
</Routes>
        </div>

      </div>
  )
}

export default App
