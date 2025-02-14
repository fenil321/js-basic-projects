const form = document.querySelector('form')

form.addEventListener('submit',function (e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const weight_guide = document.querySelector('#weight_guide');

     if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please gives a valid height ${height}`;
     }
     else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please gives a valid height ${weight}`;
     }
     else{
        const bmi = ((weight/((height*height)/1000))*10).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;

        if(bmi > 24.9){
            weight_guide.innerHTML=`<span>Overweight</span>`;
         }
         else if(bmi < 18.6){
            weight_guide.innerHTML=`<span>under weight</span>`;
         }
         else if(bmi > 18.6 && bmi < 24.9){
            weight_guide.innerHTML=`<span>normal weight</span>`;
         }
     }
    

});

/* const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
}); */