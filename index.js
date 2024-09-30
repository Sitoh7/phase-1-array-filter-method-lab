// Code your solution here

function findMatching(array,name){
    const filteredArray = array.filter(function(num){
       return num.toLowerCase() == name.toLowerCase()
        
    })
   return filteredArray
    
}

function fuzzyMatch(array,string){
    const filteredArray = array.filter(function(num){
        return num.substring(0,string.length) == string.substring(0, string.length)
    })
    return filteredArray
}

function matchName(array, name){
    const filteredArray = array.filter(function(num){
        return num.name == name
    })
   return filteredArray
}