import React from 'react'
import {useSelector} from "react-redux";
import './styles/dashboard.css'

export const Dashboard= () => {

    const {dashboard} = useSelector(state => state.films);

    return (
        <div className="list-dash">
            <h1>Dashboard</h1>
            <hr/>
            <table className="table-dash">
                <tr>
                    <th>película</th>
                    <th>Alquiladas</th>
                    <th>Disponibles</th>
                </tr>
                {dashboard.rented.map((e) => (
                <tr key={dashboard.rented.indexOf(e)}>
                    <td key={dashboard.rented.indexOf(e)}>{e.title}</td>
                    <td>{e.state}</td>
                    <td> </td>
                </tr>
                ))}
                {dashboard.available.map((e) => (
                    <tr key={dashboard.available.indexOf(e)}>
                        <td key={dashboard.available.indexOf(e)}>{e.title}</td>
                        <td> </td>
                        <td>{e.state}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}