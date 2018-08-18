
function giveItBackLater(value, callback){
    function loadComplete(){
        callback(value)
    }
    setTimeout(loadComplete, 100)
}

const addSomePromises = (somePromise) =>
    somePromise
    .then(resolved = promiseToGiveItBackLater(resolved.reapeat(2)))
    .catch(rejected => promiseToGiveItBackLater(rejected.reapeat(3)))


const promiseToGiveItBackLater = (value) =>{
    return new Promise((resolve) =>{
       const  giveItBackLater =  () => {
            resolve(value)
     }
     setTimeout(giveItBackLater, 1000)
    })
}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}