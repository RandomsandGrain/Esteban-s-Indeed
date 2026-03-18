
import { Link, Outlet, useParams } from "react-router-dom"
function Home({joblist}) {
const jobID = Number(useParams().id)
    if(!joblist) return
    return <div className="flex h-full overflow-hidden">

           <div className="flex-col h-full overflow-y-auto"> 
           {joblist.map((job) => <Link key={job.id} to={ "/" + job.id}> <div className={`group border-2 ${jobID === job.id ? "border-blue-800" : "border-gray-300"} p-5 m-5 rounded-2xl`}>

           <h2 className="text-xl font-bold group-hover:underline group-hover:decoration-1">{job.title}</h2>
             <p className="text-left">{job.company_name}<br/> {job.job_type}</p><br/>
            
             {job.salary.trim() === "" ? 
             <p className="bg-gray-200 text-left w-fit rounded-xl p-2">Pay information not provided</p> 
             : <p className="bg-green-100 text-left w-fit rounded-xl p-2">{job.salary}</p>}</div></Link>)}
           </div>

 <div className="flex flex-1 h-full overflow-y-auto relative">< Outlet/></div>

    </div> }

export default Home