function Anagrams(str){
    let Unique={}
    function anagram(w, string){
        if (string===''){
            Unique[w]= ''
        }
        for(let i = 0 ; i<string.length; i++){
            anagram(w+string[i], string.slice(0,i)+string.slice(i+1))
        }
    }
    anagram('',str)
    return Object.keys(Unique)

}
console.log(Anagrams('east'));