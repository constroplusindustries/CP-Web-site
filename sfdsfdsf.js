fetch('https://api.jsonbin.io/v3/b/644adc739d312622a3536ef6', {
    headers: {
        "X-Master-Key": "$2b$10$UEaV7eg5gCdU0ZZPBl/GYuwdNtiBXxrGbbU4zfw4tcHbC3ipdy4KO"
    }    
}).then(res => console.log(res.json()));