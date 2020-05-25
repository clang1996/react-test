
let id = parseInt(JSON.stringify(window.localStorage.getItem('idMax')) || '0')
const createId =  ()=>{
    id +=1
    window.localStorage.setItem('isMax',id.toString())
    return id
}

export {createId}