import React from 'react'
import { Link } from 'react-router-dom'
import JsonData from './data.json'
import jwt from 'jwt-decode'
import { useHistory } from "react-router-dom";

function HomePage({navigation}) {
    let history = useHistory()
    const user = jwt(localStorage.getItem('token'))

    const DisplayData=JsonData.map(
        (info,idx)=>{
            return(
                <tr key={idx}>
                    <td>{info.id}</td>
                    <td><a href= "#">{info.name}</a></td>
                    <td>{info.city}</td>
                    <td>{info.Registered}</td>
                    <td>{info.Phone}</td>
                </tr>
            )
        }
    ) 
    const handleLogout=()=>{
        localStorage.clear();
        history.push("/")
    }

    return (
        <div className="text-center">
            <div className="header">
                <h3 style={{ marginLeft: '2%' }}>WELCOME TO ADMIN PANEL</h3> 
                <h4 style={{marginRight:'2%'}}>{user.firstName} {user.lastName}</h4>
            </div>
            <div>
            <table className="table table-striped">
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
            <button className="primary-button" onClick={()=>handleLogout()}>Log out</button>
        </div>
    )
 }
export default HomePage;
