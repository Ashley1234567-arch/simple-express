const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3000

app.use(cors());

app.get('/getAudio', (req, res) => {
    const buffer = fs.readFileSync('./im-so-ready.wav');
    const audio_base64 = buffer.toString('base64');
    return res.json({
        audio_base64
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
