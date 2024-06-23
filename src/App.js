
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Production from './components/Production/Production';
import Stats from './components/Stats/Stats';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Nav/>
     <Routes>
        <Route path="/" element={<Production/>}/>
        <Route path="/flav" element={<Stats/>}/>

        <Route/>
    

     </Routes>
     
     </BrowserRouter>


    </div>
  );
}

export default App;
