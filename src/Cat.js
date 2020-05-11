import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import './App.css';

const Button = styled.button`
  border: 2px solid #333;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 20px;

`;


function Cat() {

  useEffect(()=> {
    fetchItems();
  },[])

  const [items, setItems] = useState([]);

  const fetchItems = async() => {
    const data = await fetch("https://api.thecatapi.com/v1/images/search?size=full");
  
    const items = await data.json();
    console.log(items)
    setItems(items);
  }

  return (
    <div>
      <h1>Cat Page</h1>
      <Button>Refresh the page!</Button>
      {items.map(item=>
        <img key={item.id} src={item.url}/>
        )}

    </div>
  );
}

export default Cat;
