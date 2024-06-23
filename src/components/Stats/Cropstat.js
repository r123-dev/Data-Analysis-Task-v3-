// src/components/CropStats.js

import React, { useState, useEffect } from 'react';
import { Table, Container, Title } from '@mantine/core';
import { calculateAverages } from './Data';

const CropStats = ({ data }) => {
    const [cropAverages, setCropAverages] = useState({});

    useEffect(() => {
        const averages = calculateAverages(data);
        setCropAverages(averages);
    }, [data]);

    return (
        <Container>
            <Title order={1}>Crop Statistics (1950-2020)</Title>
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Crop</th>
                        <th>Average Yield of the crop between 1950-2020</th>
                        <th>Average Cultivation Area
of the Crop between
1950-2020</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(cropAverages).map((cropName, index) => (
                        <tr key={index}>
                            <td>{cropName}</td>
                            <td>{cropAverages[cropName].avgYield.toFixed(3)}</td>
                            <td>{cropAverages[cropName].avgArea.toFixed(3)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default CropStats;
