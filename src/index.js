import express from 'express';
import controllers from './controller/index.js';


const app = express();

app.use(express.json());
app.get('/', controllers.getAllItems);
app.get('/:id', controllers.getItem);

app.get('*', (_, res) => {
    res.status(404).send({
        message: 'Page not found'
    });
})


app.listen(3000, () => {
    console.log('get All Items: http://localhost:3000/');
    console.log('get item id=2 : http://localhost:3000/2');

});

