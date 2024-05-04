// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age ,and stored the data into an array (one array for each) For now ,they are just interested in knowing whether a dog is an adult or a puppy . A dog is an adult if it is at least 3 years old , and its a puppy if its less than 3 year old.

//TEST DATA 1: jULIAS DATA [3,2,1,7,17],Kates data [9,2,5,3,1]

const doggy = function (dogy_julia, dogy_kate) {
  const resultd_dog = dogy_julia.slice();

  // resultd_dog.splice(1, 2);
  // resultd_dog.splice(-2);
  const maindog = resultd_dog.concat(dogy_kate);
  maindog.forEach(function (dogvalue, i) {
    if (dogvalue >= 3) {
      console.log(`this is ${dogvalue} years old adult dog`);
    } else {
      console.log(`this is a puppy with age of ${dogvalue}`);
    }
  });
};
doggy([3, 2, 1, 6, 17], [3, 9, 2, 5, 3, 1]);
doggy([1, 2, 1, 6, 7], [2, 6, 3, 2, 9, 1]);
