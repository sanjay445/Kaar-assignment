const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://SanjaySiva:sanjay%40123@cluster0.epyhg.mongodb.net/test';
const client = new MongoClient(uri, { useNewUrlParser: true });


app.get('/api/:startindnex/:endindnex', async (req, res) => {
    const start = req.params.startindnex
    const end = req.params.endindnex
    findListings(client);
    async function findListings(client) {
        await client.connect()
        const cursor = client.db('sample_training').collection('grades').find().limit(Number(end)).skip(Number(start))
        const results = await cursor.toArray();
        res.send(results)
    }
})

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})