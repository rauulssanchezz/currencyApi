
async function main(){
    const baseUrl = 'http://localhost:3000/dollar'
    const queryString = '?amount=100&currency=pound'
    const url = baseUrl + queryString
    let apiInfo
    
    const fetchApi = async (url) => {
        await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            apiInfo = data
        })
    } 
    
    await fetchApi(url)
    
    console.log({apiInfo})
}

main()