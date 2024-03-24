import AddCarForm from "./AddCarForm";


const AddCar = async (carData)=>{
        const maxId = users.length > 0  ? Math.max(...users.map(car => car.id)) : 0;
        const newCar = {...carData , id: maxId + 1};
        const response  = await fetch('http://localhost:3030/cars',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newCar)
        })
        const addCar = await response.json();
        setUsers(prevCars => [...prevCars,addCar])

        return(
            <AddCarForm AddCar={AddCar}/> 
        );

    }

export default AddCar;
    

