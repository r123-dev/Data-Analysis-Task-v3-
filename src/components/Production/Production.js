// src/App.js

import React, { useState, useEffect } from 'react';
import './Production.css';
import { processData } from '../Dataprocess';
// import { Table, Container, Title } from '@mantine/core';
import { Table } from '@mantine/core';
import { Title } from '@mantine/core';
import { Container } from '@mantine/core';
import { sampleData } from '../../DATA';
const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
         

            setData(processData(sampleData));
        };

        fetchData();
    }, []);

    return (
      <Container>
      <Title order={1}>Crop Production Data</Title>
      <Table striped highlightOnHover>
          <thead>
              <tr>
                  <th>Year</th>
                  <th>Crop with Maximum Production</th>
                  <th>Crop with Minimum Production</th>
              </tr>
          </thead>
          <tbody>
              {data.map((row, index) => (
                  <tr key={index}>
                      <td>{row.Year}</td>
                      <td>{row.MaxProductionCrop}</td>
                      <td>{row.MinProductionCrop}</td>
                  </tr>
              ))}
          </tbody>
      </Table>
  </Container>    );
};

export default App;
