
let pokemonList = ["피카츄","라이츄","파이리","꼬부기"];


function exampleOne(array:Array<string>,change1:string,change2:string):string{
    const result = array.splice(1,2,change1,change2)
    console.log(result)
    return result.join("");
}

// console.log(pokemonList);
// const result =exampleOne(pokemonList,"야도란","또가스")
// console.log(result)


let result2 = pokemonList.splice(1,2,"강","지")
console.log(pokemonList)