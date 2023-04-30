const putContactUsDetails = async () => {
    const [name, email, phone, message] = [document.getElementById('cuName').value, document.getElementById('cuEmail').value, document.getElementById('cuPhone').value, document.getElementById('cuMessage').value];
    
    const postBody = {
       "name": name,
       "phone": phone,
       "email": email,
       "message": message 
    };

    const dataItem = await fetch('https://api.jsonbin.io/v3/b/644bad348e4aa6225e9297f9', {
        headers: { "X-Master-Key": "$2b$10$UEaV7eg5gCdU0ZZPBl/GYuwdNtiBXxrGbbU4zfw4tcHbC3ipdy4KO"}      
    }).then(res => res.json());

    let object = dataItem.record;
    object.contactDetails = [ ...dataItem.record.contactDetails, postBody ];

    const data = await fetch('https://api.jsonbin.io/v3/b/644bad348e4aa6225e9297f9', {
        method: "PUT",
        headers: { "X-Master-Key": "$2b$10$UEaV7eg5gCdU0ZZPBl/GYuwdNtiBXxrGbbU4zfw4tcHbC3ipdy4KO", "Content-Type": "application/json" },
        body: JSON.stringify(object)  
    }).then(res => res.json());;

    console.log(data);

    
    if(data != null) confirm('You will be contacted Soon!');
    ['cuName', 'cuEmail', 'cbPhone', 'cuMessage'].map(item => document.getElementById(item).value = "");
}