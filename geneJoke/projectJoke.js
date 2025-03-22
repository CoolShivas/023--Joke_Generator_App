import https from "https";


const getJokes = () => {
    const url = `https://official-joke-api.appspot.com/random_joke`;

    https.get(url, (response) => {
        let data = "";
        response.addListener('data', (chunk) => {
            data += chunk;
        });
        response.on("end", () => {
            const joking = JSON.parse(data);
            console.log(joking);
            // // Here, we are getting the Output on Terminal as :- 
            // // {
            // //     type: 'general',
            // //     setup: "did you know the first French fries weren't cooked in France?",
            // //     punchline: 'they were cooked in Greece',
            // //     id: 31
            // //   }
        });
    })
};

getJokes();