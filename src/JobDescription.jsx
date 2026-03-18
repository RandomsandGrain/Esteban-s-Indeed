import { useParams } from "react-router-dom"

function JobDescription({ joblist }) {
    const jobID = Number(useParams().id)
    const findjob = joblist.find((job) => job.id === jobID )

    if(!findjob) return 

    return <div className=" p-10 m-5 h-fit border-2 rounded-xl border-gray-500 "><h2 className="text-2xl font-bold">{findjob.title}</h2>
    <a target="_blank" rel="noreferrer" className="underline hover:text-blue-700" href={findjob.url}>{findjob.company_name}</a>
    <h3>{findjob.candidate_required_location} | {findjob.job_type}</h3>
    <a className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl p-2 mt-2 mb-5" target="_blank" rel="noopener noreferrer" href={findjob.url}>Apply on Company Website</a>

    <hr/>
    <h3 className="font-bold text-xl mt-5">Job Details</h3>

    {findjob.salary.trim() === "" ? undefined : <div> <h4 className="text-left font-bold">Pay</h4>
    <p className="bg-green-100 w-fit text-left hover:bg-green-200 p-2 rounded-xl mb-5">{findjob.salary}</p> </div>
    }

    <h4 className="text-left font-bold">Job type</h4>
    <p className="bg-green-100 w-fit text-left hover:bg-green-200 p-2 rounded-xl">{findjob.job_type}</p>

    <hr className=" mt-5 mb-5"/>
    <h3 className="font-bold text-xl mb-5">Full Job Description</h3>
   <div
   dangerouslySetInnerHTML={{ __html: findjob.description}} 
   />
    </div>
}

export default JobDescription