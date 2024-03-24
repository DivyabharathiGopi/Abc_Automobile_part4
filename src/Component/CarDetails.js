import React from 'react'
import { useParams} from 'react-router-dom'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

const CarDetails =()=>{
    const{id}=useParams();
    const [cars,setCars] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`http://localhost:3030/cars/${id}`);
            const result = await response.json();
            setCars(result);
        };
        fetchData();
    },[id])

    return(
        <>
        <h2>Car Details</h2>
        <table className='car-table'>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                        <tr><td>{cars.id}</td></tr>
                        <tr><td><b>Model: </b>{cars.name}</td></tr>
                        <tr><td><b>Image URL: </b>{cars.image}</td></tr>
                        <tr><td><b>Price: </b>{cars.price}</td></tr>
                        <tr><td><b>Mileage: </b>{cars.mileage}</td></tr>
                        <tr><td><b>Color: </b>{cars.color}</td></tr>
                        <tr><td><b>Seats: </b>{cars.seats}</td></tr>
                        <tr><td><b>Fuel Type: </b>{cars.fueltype}</td></tr>
                        <tr><td><b>Gear Type: </b>{cars.geartype}</td></tr>
                        <tr><td><b>Description: </b>{cars.description}</td></tr>
                        <tr><td>
                        <Link to={'/vehicles'}>
                            <button type='button'>Bact</button>
                        </Link>
                        </td>
                        </tr>
            </tbody>
        </table>
        </>
    )
}
export default CarDetails;



