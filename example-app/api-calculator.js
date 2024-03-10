const express=require("express");
const app=express();

//Toplama işlemi
app.get("/api/add/:num1/:num2",(req, res) =>{
    const num1 =parseInt(req.params.num1);
    const num2 =parseInt(req.params.num2);
    const result =num1 + num2;
    res.send(`Sum: ${result}`);
});
//Çıkarma işlemi
app.get("/api/subtract/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if (num1 < num2) {
        res.status(400).send("Subtraction cannot be performed because the first number is smaller than the second!");
    } else {
        const result = num1 - num2;
        res.send(`Difference: ${result}`);
    }
});j
//Çarpma İşlemi
app.get("/api/multiply/:num1/:num2",(req,res) =>{
    const num1=parseInt(req.params.num1);
    const num2=parseInt(req.params.num2);
    const result=num1*num2;
    res.send(`Product: ${result}`);
});
//Bölme İşlemi
app.get("/api/divide/:num1/:num2",(req,res) =>{
    const num1=parseInt(req.params.num1);
    const num2=parseInt(req.params.num2);
    if(num2 === 0){
        res.status(400).send("Divide by zero error");
    }
    else{
        const result=num1/num2;
        if(!isFinite(result)){ //Kontrol eklendi
            res.status(400).send("The operation connot be performed because the result is infinite!");
        }
        else{
            res.send(`Quotient: ${result}`);
        }
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000...");

});