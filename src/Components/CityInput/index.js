import React from "react";

import { Form, Button, Container } from "react-bootstrap";

const CityInput = ({city,setCity,fetchCityWeather}) => {

    // const [city,setCity] = React.useState("");
    const [error,setError] = React.useState("");

   function handleLogin() {
        
        if(city.length <= 0){
            // alert("City is Empty")
            setError("City Field is Empty")
        }else{
            setError("")
            // fetchResult();
        }
    }

    const fetchResult = () => {
        
    }

    const handleInputChange=(event) => {
        setCity(event.target.value);
        setError("")
    }

  return (

    

    <div>
      <Container>
        <Form>
          <Form.Group className="formid" controlId="cityName">
            <Form.Label>Enter City Name</Form.Label>
            <Form.Control onChange={handleInputChange} type="text" value={city} placeholder="Enter City" />
            <p className="text-danger">{error}</p>
          </Form.Group>

          <Button onClick={fetchCityWeather} variant="primary" >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CityInput;
