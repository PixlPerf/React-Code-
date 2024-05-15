import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {


  const [data, setData] = useState([]);

  const [selectedOption, setSelectedOption] = useState();

  const fetchData = async () => {
    let result = await fetch('https://pokeapi.co/api/v2/pokemon');
    let resultStream = await result.json();
    setData(() => {
      return resultStream.results;
    });
  }

  useEffect(() => {
    console.log('data', data);
  }, [data])

  useEffect(() => {
    fetchData();
  }, []);

  const changeHandler =(e)=>{
    setSelectedOption(e.value);
  }

  



  return (
    <div className="App">
      hello

      <select >
        {data.map((inst) => <option value={inst.name}>{inst.name}</option>
        )}
      </select>

    </div>
  );
}

export default App;
