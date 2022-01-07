const isPositiveNumber =(value)=>{
    if(value<0 || value ===0){
        return false
    }
    else if (value >0){
        return true
    }
    else{
        return false
    }
}

module.exports = isPositiveNumber