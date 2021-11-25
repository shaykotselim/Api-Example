const searchFood = () => {
    const searchField = document.getElementById('search-food');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value ='';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.meals))
}
const displayResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal =>{
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
        <div onclick="loadeMealdetail(${meal.idMeal})"class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
          </div>
        </div>
      
        `;
        searchResult.appendChild(div);
    })
    // console.log(meals);
}

const loadeMealdetail = mealId => {
    // console.log(mealId);
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal=>{
    
  const mealDetails = document.getElementById('meal-details');
  const div = document.createElement('div')
  div.classList.add('card');
  div.innerHTML =`
            <div class="card h-5 w-25 mx-auto" >
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
  `;
  mealDetails.appendChild(div)
}




