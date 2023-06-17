const updateCountOf = async (page) => {
    let dataItem = await fetch('https://api.jsonbin.io/v3/b/648c7bafb89b1e2299b0073f', {
        headers: { "X-Master-Key": "$2b$10$UEaV7eg5gCdU0ZZPBl/GYuwdNtiBXxrGbbU4zfw4tcHbC3ipdy4KO"}      
    }).then(res => res.json());
    
    dataItem = dataItem['record']
    dataItem[page] =+ 1; 

    const data = await fetch('https://api.jsonbin.io/v3/b/648c7bafb89b1e2299b0073f', {
        method: "PUT",
        headers: { "X-Master-Key": "$2b$10$UEaV7eg5gCdU0ZZPBl/GYuwdNtiBXxrGbbU4zfw4tcHbC3ipdy4KO", "Content-Type": "application/json" },
        body: JSON.stringify(dataItem)  
    }).then(res => res.json());
}

