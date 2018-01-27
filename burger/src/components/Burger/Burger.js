import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    /* ALT WAY USING ES6 */

    // .reduce((arr, el) => {
    //     return [...arr, ...el];
    // }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    /* ALTERNATIV WAY TO DO USING FOREACH */
    
    // const transformedIngredients = [];
    // Object.keys(props.ingredients).forEach((v) => {
    //     for (let i = 0; i < props.ingredients[v]; ++i) 
    //         transformedIngredients.push(<BurgerIngredient type={v} key={v + i} />) 
    // });
    
    //console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;

/* 

Object.keys(props.ingredients) is [salad, bacon, cheese, meat]. 
props.ingredients[name] is the number of the current ingredient (singular).   So 5 slices of cheese is 5. 
      ...Array(props.ingredients[name]) is 5 undefined array items, 
      if there are 5 slices of cheese (the current burger ingredient item),  then,  ... 
             there are 5 array items,  but,  not inside an array.   The ... (spread operator) has stripped them out of Array(). 
      [...Array(props.ingredients[name])]     Now,  the 5 undefined array items,  are inside a new array. 
                Above:  Note,  ...Array(props.ingredients[name]) is now placed inside [ ]. 
      So now,  the result is  [...Array(5)]   or   [ , , , , ]  
[...Array(props.ingredients[name])].map((_, index) => { ...  is the same as  ... 
      [ , , , , ].map((_, index) => { ....    _ reminds us that we are iterating through 5 undefined array items. 
            You named _ to value.
The (above) purpose:  To dynamically determine,  the number of each ingredient (cheese),  the user added to their burger. 
      The map() iterates for each empty array item.  That's all this array is used for (nothing more). 
                So,  when map() gets to cheese,  it will iterate 5 times (5 undefined array items). 
This (above) number will determine how many <Ingredient ... />s (of each ingredient type) are drawn to the GUI. 
<Ingredient key={name + index} type={name} /> is the same as ... 
      <Ingredient key={"cheese2"} type={"cheese"} />    5 images of cheese are drawn to the GUI. 
Note: key={cheese2}    A key can be any configuration of string characters,  as long as it's unique. 
                unique: meaning,  compared to any other JSX created DOM element. 
----------------------------------------------------------------------------------------------------------------------------------------------------------------- 
... are we essentially "filling" the empty placeholders ?   No (see above or ask me to further explain).     MLR  :) 
Pop quiz:  Are you the Liam that has "a particular set of skills"?   What movie am I referencing ? 

Hi, Max. This is how I understand transforming the ingredients object into an array of <BurgerIngredient /> components.
First, the Object.keys(props.ingredients) returns an array containing the keys, i.e., the ingredient names. 
Using the map function on this array, we construct a new array using the Array() function by passing the number of times each ingredient must be added,
 (which is the value in the original ingredients object passed as props) as the value. Then for each array of specific ingredients, we return the JSX containing the BurgerIngredient component.
In short, we are extracting the keys of the ingredients into an array, then for each ingredient in that array, 
we are creating a new array with that ingredient present as many times as specified in the value, then for each element of that array (the second one), we are generating JSX.
Hope I've understood correctly, and if so, I hope my above explanation clarifies it for anyone who might find it difficult to understand.

So Array(...)  generates a new array of the length of the argument provided. 
All elements will be undefined at the beginning. So Array(3)  would give you [undefined, undefined, undefined] .
We then map()  each undefined value to a value that actually makes sense.
Max

*/