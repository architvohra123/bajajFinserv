const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // const evenNumbers = data.filter(num => num % 2 === 0);
        // const oddNumbers = data.filter(num => num % 2 !== 0);
        // const alphabets = data.filter(item => typeof item === 'string' && item.match(/[a-zA-Z]/)).map(item => item.toUpperCase());
       
        const alphabets=[];
        const evenNumbers=[];
        const oddNumbers=[];
        for(let i=0;i<data.length;i++){
            if((data[i]>="a" && data[i]<="z") || (data[i]>="A" && data[i]<="Z")){
                alphabets.push(data[i]);
            }else if(Number.isInteger(data[i])){
                if(data[i]%2==0){
                    evenNumbers.push(data[i]);
                }else{
                    oddNumbers.push(data[i]);
                }
            }else{
                throw error;
            }
        }

        const response = {
            is_success: true,
            user_id: "archit_vohra_10112003",
            roll_number: "2110990249", 
            email: "archit0249.be21@chitkara.edu.in", 
            even_numbers: evenNumbers,
            odd_numbers: oddNumbers,
            alphabets: alphabets
        };

        res.json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ is_success: false, error: "Internal server error" });
    }
});

// Helper function to generate user ID
function generateUserId(fullName, dob) {
    const formattedName = fullName.toLowerCase().replace(/\s+/g, "_");
    const formattedDOB = dob.split('/').reverse().join('');
    return `${formattedName}_${formattedDOB}`;
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
