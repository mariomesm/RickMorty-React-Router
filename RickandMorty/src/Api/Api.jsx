const BASEURL = 'https://rickandmortyapi.com/api/character/'

const getData = async()=>{
    try{
        let response = await fetch(`${BASEURL}`)
        let data = await response.json()
        return data
    }
    catch(error){
        error.json({
            messange:"Error 400"
        })
    }
}
const getDataId = async (id)=>{
    try{
        let response = await fetch(`${BASEURL}${id}`);
        let data = await response.json()
        return data
    }catch(error){
        error.json({
            messange:"Error 400"
        })
    }
}

export {getData, getDataId}