import React from 'react'
import { Link } from 'react-router-dom'
import JsonData from './data.json'




function HomePage() {
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td><a href= "#">{info.name}</a></td>
                    <td>{info.city}</td>
                    <td>{info.Registered}</td>
                    <td>{info.Phone}</td>
                </tr>
            )
        }
    ) 


    return (
        <div className="text-center">
            <div>
            <h1 className="header">WELLCOME TO ADMIN PANEL</h1>
            </div>
            <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Registerd</th>
                    <th>Phone</th>        
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
 }
export default HomePage;
