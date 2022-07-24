
// Search Section


const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function(){
    
    const searchBar = document.getElementById('search-bar').value;
    // console.log(searchBar);
    
    const searchUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(searchUrl)
    .then(res => res.json())
    .then(data => {
        const meals = data.categories;
        
        let mealCatagory = 0;

        for (let i = 0; i < meals.length; i++) {
        const element = meals[i];
        const catagory = element.strCategory;
            if (catagory === searchBar){
                mealCatagory = catagory;
            
                break;
            }else{
                mealCatagory = false;
            }
        }
    if (mealCatagory == false){
        document.getElementById('invalid').style.display = 'block';
        document.getElementById('random-meal').style.display = 'none';
       
        

    }else{
        searchResult(mealCatagory);
        
    }

    

    
    // console.log(data);
    // const aaa = data.meals[0];
    // const bbb = aaa.strMeal;
    // console.log(bbb);
})
})

// Result Section

const randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
fetch(randomUrl)
.then(res => res.json())
.then(data => {
    const randomMeals = data.meals[0];

    const name = randomMeals.strMeal;

    const image = randomMeals.strMealThumb;

    const ing1 = randomMeals.strIngredient1;
    const ing2 = randomMeals.strIngredient2;
    const ing3 = randomMeals.strIngredient3;
    const ing4 = randomMeals.strIngredient4;
    const ing5 = randomMeals.strIngredient5;
    const ing6 = randomMeals.strIngredient6;



    const random = document.getElementById('random-meal');

    const randomDiv = document.createElement('div');
    random.appendChild(randomDiv);

    randomDiv.className = 'random';

    const mealInfo = `
    <img class = "image" src="${image}" alt="">
    <h5 class ="name">${name} </h5>

    `
    randomDiv.innerHTML = mealInfo;

    document.getElementById('random-meal').addEventListener('click', function(){
        document.getElementById('random-meal').style.display=('none');
        document.getElementById('search-area').style.display=('none');
        document.getElementById('detailes').style.display=('block');

        const detailes = document.getElementById('detailes');

        const detailDiv = document.createElement('div');
        detailes.appendChild(detailDiv);

        const mealDetail = `
        <img class = "image2" src="${image}" alt="">
        <h3><b>${name}</b></h3>
        <h6><b>Ingredients </b></h6>
        <ul>
            <li>${ing1}</li>
            <li>${ing2}</li>
            <li>${ing3}</li>
            <li>${ing4}</li>
            <li>${ing5}</li>
            <li>${ing6}</li>
        </ul>
        `;
        detailDiv.innerHTML = mealDetail;
        
    })
})

// Search Result Section

function searchResult(catagoty){
    const result = `https://www.themealdb.com/api/json/v1/1/search.php?s=${catagoty}`
    fetch(result)
    .then(res => res.json())
    .then(data => {
        const meals = data.meals;

        // console.log(meals);

        for (let i = 0; i < meals.length; i++) {
            const element = meals[i].idMeal;
            // console.log(element);
            results(element);
            
        }
        
    })
}



function results(element){

    const idSearch = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element}`;
    fetch(idSearch)
    .then(res => res.json())
    .then(data => {
        const meals = data.meals[0];

        const id = meals.idMeal;

        const name = meals.strMeal;

        const image = meals.strMealThumb;
        

        const ing1 = meals.strIngredient1;
        const ing2 = meals.strIngredient2;
        const ing3 = meals.strIngredient3;
        const ing4 = meals.strIngredient4;
        const ing5 = meals.strIngredient5;
        const ing6 = meals.strIngredient6;
        

    document.getElementById('random-meal').style.display = "none";

    const result = document.getElementById('search-result');
    const resultDiv = document.createElement('div');
    result.appendChild(resultDiv);

    resultDiv.className = 'random';


    const mealInfo = `
    <div onclick="mealDetailes(${id})">
    <img class = "image" src="${image}" alt="">
    <h5 class ="name">${name} </h5>
    </div>
    

    `;
    resultDiv.innerHTML = mealInfo;

    

    })
}

function mealDetailes (id){
    const idSearch = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(idSearch)
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        const meals = data.meals[0];
        const name = meals.strMeal;

        const image = meals.strMealThumb;
        

        const ing1 = meals.strIngredient1;
        const ing2 = meals.strIngredient2;
        const ing3 = meals.strIngredient3;
        const ing4 = meals.strIngredient4;
        const ing5 = meals.strIngredient5;
        const ing6 = meals.strIngredient6;


        document.getElementById('search-result').style.display ="none";
        document.getElementById('search-area').style.display=('none');
        document.getElementById('detailes2').style.display ="block";
        

        const Details2 = document.getElementById('detailes2');

        const detailes2Div = document.createElement('div');
        Details2.appendChild(detailes2Div);


        const mealDetail = `
        <img class = "image2" src="${image}" alt="">
        <h3><b>${name}</b></h3>
        <h6><b>Ingredients </b></h6>
        <ul>
            <li>${ing1}</li>
            <li>${ing2}</li>
            <li>${ing3}</li>
            <li>${ing4}</li>
            <li>${ing5}</li>
            <li>${ing6}</li>
        </ul>
        `;

        detailes2Div.innerHTML = mealDetail;

        

        

        
    })
}

// results();



