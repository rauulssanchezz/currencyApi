async function main(){
    const baseUrl = 'http://localhost:3000/saves'
    const queryString = '?currency=pound'
    let url = baseUrl
    let apiInfo
    let saves = 0
    
    const saveMoney = async (url) => {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: 100,
                currency: 'pound'
            })
        })
        .then(response => response.json())
        .then(data => {
            apiInfo = data
        })
    } 

    const getMoney = async (url) => {
        await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            saves = data
        })
    }

    await saveMoney(url)
    console.log({apiInfo})

    url += queryString
    await getMoney(url)
    console.log({saves})
    
}

main()