import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/products', (req, res) => {
  const product = req.body;
  // ürün ekleyen kod burada olacak
  res.send('Ürün başarıyla eklendi.');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
