const Reducer=(state,action)=>{
    if(typeof state === "undefined"){
        return 1
    }
    switch (action.type){
        case "ADDNUM":
            return state + 1
        case "SUBNUM":
            return state - 1
        default:
            return state
    }
}

export default Reducer