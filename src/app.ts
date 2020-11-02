import express from 'express';
const app = express();
import router from './router/router';

// Setting routes
app.use(router);

// Server listener
app.listen(8080, () => {
    console.log('Backend running');
})