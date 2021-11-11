import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from "./Components/CharacterGrid";
import Header from './Components/Header';
import Search from "./Components/Search";



function App() {
  const [items, setItems] = useState([])
  const [isloading , setIsloading] = useState(true);
  const [quary, setQuary]= useState('')

  useEffect(()=>{
    const fetchItems = async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${quary}`)
      console.log(result.data)
      setItems(result.data)
      setIsloading(false);
    }

    fetchItems();
  }, [quary])
  return (
    <div className="container">
      <Header />
      <Search getQuary={(q)=> setQuary(q)} />
      <CharacterGrid isloading={isloading} items={items}/>
      
    </div>
  );
}

export default App;
