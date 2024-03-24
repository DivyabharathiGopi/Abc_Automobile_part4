import React from 'react';
import { useState, useEffect, Component } from "react";
import {Link} from 'react-router-dom';
import "./ComponentsStyles.css";
import  "./Car.css"


const CarList = () => {

    const [cars,setCars] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('http://localhost:3030/cars');
            const result = await response.json();
            setCars(result);
        } ;
        fetchData();
    },[])
    
    return (
        <>
        <h3>Car List</h3>
        <table className='car-table'>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {cars.map(car=>
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.name}</td>
                        <Link to={`/vehicles/${car.id}`}>
                        <button type='button'>View More</button>
                        </Link>
                        <button type='button'>Add</button>
                    </tr>
                    )}
            </tbody>
        </table>
        </>
    )

}

export default CarList;
