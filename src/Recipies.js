function Recipies ({label,image,ingredients,cuisine,diet,calories}){

    return(<div className="container recipe">
        <h2>{label}</h2>
        <p>{cuisine} cuisine, {diet}</p>
        <p>{calories.toFixed()} Calories</p>
        <img src={image} alt = 'pic'/>

<ul>
    {ingredients.map((ingredient, index)=>(
        <li key={index}> 🥬 {ingredient}</li>
    ))}
</ul>
    </div>)
}

export default Recipies;