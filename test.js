/**
 * @ params{array} arrayData
 * @ params {string} insertData
 * @ return {array} 문자열로 된 배열입니다.
 * 
 * 
 * 지민씨 미안해
 * 
 *  */ 

var pokemonList = ["피카츄", "라이츄", "파이리", "꼬부기"];
pokemonList.splice(0, 2, "야도란", "또가스");
function exampleOne(array, change1, change2) {
    var result = array.splice(0, 2, change1, change2);
    return result.join("");
}
var result = exampleOne(pokemonList, "야도란", "또가스");
console.log(result);

example