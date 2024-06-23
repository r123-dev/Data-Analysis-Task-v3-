// src/App.js

import React, { useState, useEffect } from 'react';
import { Container } from '@mantine/core';

import CropStats from './Cropstat';
import { sampleData } from '../../DATA';

const App = () => {
   
   
   

    return (
        <Container>
            <CropStats data={sampleData} />
        </Container>
    );
};

export default App;
