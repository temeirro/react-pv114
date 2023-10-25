import './App.css';
import About from './components/About';
import Privacy from './components/Privacy';
import Home from './components/Home';
import Menu from './components/Menu';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <header>
        <h1>React PV114</h1>
        <Menu/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
{/* 
        <About/>
        <Privacy/> */}
        
      </main>
    </div>
  );
}

export default App;
