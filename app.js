const express = require("express");
const app = express();

app.get('/',(req, res)=>{
    res.send('Welcome to EmailSender')
})

app.listen(3000, () => {
  console.log("listeninig on 3000");
});
