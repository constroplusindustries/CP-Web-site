const putContactUsDetails = async () => {
    const [name, email, phone, message] = [document.getElementById('cuName').value, document.getElementById('cuEmail').value, document.getElementById('cuPhone').value, document.getElementById('cuMessage').value];
    
    if(name.length !== 0 && email.length !== 0 && phone.length !== 0 && message.length !== 0) {
        document.getElementById('contact-us-button-loader').style.display = 'block';
        document.getElementById('contact-us-button').style.display = 'none';

        const postBody = {
            "name": name,
            "phone": phone,
            "email": email,
            "message": message,
            "date": new Date().toLocaleString()
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
        
        if(data != null) confirm('You will be contacted Soon!');

        if(data != null) {
            document.getElementById('contact-us-button-loader').style.display = 'none';
            document.getElementById('contact-us-button').style.display = 'block';
        }

        ['cuName', 'cuEmail', 'cuPhone', 'cuMessage'].map(item => document.getElementById(item).value = "");
    }
}