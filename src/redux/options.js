
// function addBox(box){
//     return {
//         type: "ADD_BOX",
//         box
//     }
// }



function reducer (prevState=[], action){
    switch(action.type){
        case "ADD_BOX":
            return [...prevState]
        default:
            return prevState
    }
}