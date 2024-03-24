AddCarForm:

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AddCar from "./AddCar";

function AddCarForm({ addCar }) {
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        country: "",
        phone: "",
        data_of_birth: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Car Name is required"),
        mileage: Yup.string().required("Mileage is required"),
        price: Yup.string().required("Price is required"),
        color: Yup.string().required("Color is required"),
        seats: Yup.string().required("Seats is required"),
        fueltype: Yup.date().required("Fuel Type is required"),
        geartype: Yup.date().required("Gear Type is required"),
        description: Yup.date().required("Description is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        addCar(values);
        resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <field type="text" name="price" />
          <ErrorMessage name="price" component="div" />
        </div>

        <div>
          <label htmlFor="mileage">Mileage</label>
          <field type="text" name="mileage" />
          <ErrorMessage name="mileage" component="div" />
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <field type="text" name="color" />
          <ErrorMessage name="color" component="div" />
        </div>

        <div>
          <label htmlFor="seats">Seats</label>
          <field type="text" name="seats" />
          <ErrorMessage name="seats" component="div" />
        </div>

        <div>
          <label htmlFor="fueltype">Fuel Type</label>
          <field type="text" name="fueltype" />
          <ErrorMessage name="fueltype" component="div" />
        </div>

        <div>
          <label htmlFor="geartype">Gear Type</label>
          <field type="text" name="geartype" />
          <ErrorMessage name="geartype" component="div" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <field type="text" name="description" />
          <ErrorMessage name="description" component="div" />
        </div>

        <button type="submit">Add Car</button>
      </Form>
    </Formik>
  );
}

export default AddCar;


---------------------------------------------------------------

AddCar


import AddCarForm from "./AddCarForm";

const AddCar =()=>{
const addCar = async (carData)=>{
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
    }



     return(
        <AddUserForm  addCar={addCar}/>
     );
}
 export default AddCar;