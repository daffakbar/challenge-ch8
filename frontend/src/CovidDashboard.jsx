import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
const axios = require("axios");

const CovidDashboard = () => {
  const [dataCovid, setDataCovid] = useState("");
  const [counter, setCounter] = useState(0);

  const getDataCovid = () => {
    // Make a request for a user with a given ID
    axios
      .get(`https://api.kawalcorona.com/indonesia`)
      .then(function (response) {
        // handle success
        console.log(response.data[0]);
        setDataCovid(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log("tes");
      });
  };
  useEffect(() => {
    //   didMount
    console.log("tes");
    getDataCovid();
    return () => {
      console.log("tes");
    };
  }, []);
  useEffect(() => {
    //   apa yg  di lakukan di sini ketika update
    // will update
    console.log("ada update");
  }, [counter]);
  const increment = () => {
    let counterTemp = counter;
    setCounter((counterTemp += 1));
  };
  // realtime perlu socket / hooks untuk picu refresh
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Positif</Card.Title>
            <Card.Text>{dataCovid.positif}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Sembuh</Card.Title>
            <Card.Text>{dataCovid.sembuh}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Meninggal</Card.Title>
            <Card.Text>{dataCovid.meninggal}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Dirawat</Card.Title>
            <Card.Text>{dataCovid.dirawat}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
    </>
  );
};

export default CovidDashboard;
