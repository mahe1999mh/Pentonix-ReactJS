
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// import App from '../App';
// import Home from '../Home';

const DataService = () => {
    useEffect(()=>{
        axios.get("http://ec2-3-20-29-91.us-east-2.compute.amazonaws.com:9001/dynamoDb/getAllOpenJobs").then(
            response =>{ setDate(response.data)

              Swal.fire(
                
                'Data fetched successfully!',
                
              );

            }   
        )
    },[])

    const [data , setDate] = useState([])

    // const [position,skills,department] = data
  
  return (
   <>
         <center>
         <div className="list">
         {
            
            data.map((user)=>{
                return <Apps {...user}  key={user.id}/>
            })
            
          }
          <Apps/>
          </div>
        </center>

      
   </>
  )
}


const Apps = ({location,overview,responsibilities,skills,department,workStatus}) =>{
  return(
    <>
          <table>
  <tr>
    <th>location</th>
    <th>overview</th>
    <th>responsibilities</th>
    <th>workStatus</th>
    <th>skills</th>
    <th>department</th>

  </tr>
  <tr>
    <td>{location}</td>
    <td>{overview}</td>
    <td>{responsibilities}</td>
    <td>{workStatus}</td>
    <td>{skills}</td>
    <td>{department}</td>

  </tr>
  
</table>
    </>
  )
}
export default DataService