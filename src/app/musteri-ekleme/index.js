import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/customers', (req, res) => {
  const customer = req.body;
  // müşteri ekleyen kod burada olacak
  res.send('Müşteri başarıyla eklendi.');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
