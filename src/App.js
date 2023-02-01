import video from './video.mp4';
import { useEffect, useState } from 'react';
import './App.css';
import Recipies from './Recipies';

function App() {

  const MY_ID = "d11a6160";
  const MY_KEY = "4b8c05d97ebd1691cb71d27eb21ebb60"

const [mySearch, setMySearch] = useState('');
const [myRecipies, setMyRecipies] = useState ([]);
const [wordSubmit, setWordSubmit] = useState ('avocado') 


useEffect(()=>{
  async function fetchData (){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipies (data.hits)
  }
  fetchData();
}, [wordSubmit])

const myRecipeSearch =(e)=>{
  setMySearch (e.target.value)
}

const finalSearch =(e)=> {
  e.preventDefault();
  setWordSubmit(mySearch);
}

  return (
    <div>
     <div className='container'>
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
  <h1>Find a Recipe</h1>
  <h2>get inspired</h2>
  </div> 

  <div className='container'>
  <form onSubmit={finalSearch} >
    <input className='search' placeholder='Search...' onChange = {myRecipeSearch} value = { mySearch }>
    </input>
  </form>
  <button>search</button>
</div>

<div className='container'>
{myRecipies.map(element=>(
  <Recipies 
  label={element.recipe.label}
  image = {element.recipe.image}
  ingredients = {element.recipe.ingredientLines}
  calories = {element.recipe.calories}
  cuisine = {element.recipe.cuisineType}
  diet = {element.recipe.dietLabels}

  />
))}

</div>

    </div>
  );
}

export default App;
