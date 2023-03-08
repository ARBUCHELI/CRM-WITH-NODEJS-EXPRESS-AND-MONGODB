import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

routes(app);

//This is the first endpoint
app.get('/', (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})