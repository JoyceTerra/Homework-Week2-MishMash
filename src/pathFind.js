function pathFind(path, obj){  
    if(path.length === 1){ //if there is only element, nothing has been changed
        return obj[path[0]]
    }else{
        const newPath = []
        newPath.shift()
        return pathFind(newPath, obj[path[0]]) //else, remove the first element
    }
}

module.exports = { pathFind }


