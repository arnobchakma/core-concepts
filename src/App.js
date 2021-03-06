import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const array = ['Korim', 'Jorim', 'Morim', 'Marium']
  const friend = [
    {name: 'Megla', profession: 'Student'},
    {name: 'Negla', profession: 'Student'},
    {name: 'Tegla', profession: 'Student'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a person who write react</p>
        <Posts></Posts>
        <Counter></Counter>
        <ul>
            <li>{array[0]}</li>
            <li>{array[1]}</li>
            <li>{array[2]}</li>
            <li>{array[3]}</li>
        </ul>
        <ul>
            {
              array.map(arr => <li>{arr}</li>)
            }
            {
              friend.map(fd => <li>{fd.name}</li>)
            }
        </ul>

        <Product name="Photoshop" price="$99.99"></Product>
      </header>
    </div>
  );
}

// This function is for Increase/Decrease add cart count 
function Counter(){
  const [count, setCount] = useState(12);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

// This function is for API related How to call api in server
function Posts(){
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setPosts(data));
  })
  return (
    <div>
      <h2>Posts:{posts.length}</h2>
      <ul>
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
  }
  
  
// this is product function
function Product(props){
  const style={
    border: '1px solid red',
    backgroundColor: 'orange',
    borderRadius: '1rem',
    padding: '10px'
  }
  return (
    <div style={style}>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
