import https from "https";
import chalk from "chalk";


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
            console.log(chalk.yellow.bgYellow.bold(`Here is the random ${joking.type} joke :`));
            console.log(chalk.red (`${joking.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joking.punchline}`));
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