import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/path_1', (req, res) => {
    res.send('Hello World in Path 1');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});