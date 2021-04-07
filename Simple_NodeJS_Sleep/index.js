const express = require("express");

const app = express();


app.get('/', async (req, res) => {
    require('sleep').sleep(1)
    return res.status(200).json({ ok: "ok" })
})



app.listen(3000, () => console.log("Server started on port 3000"));