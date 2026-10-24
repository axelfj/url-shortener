import 'dotenv/config';
import { app } from './api';
app.listen(Number(process.env.PORT || 5000), process.env.HOST || '127.0.0.1', () => {
  console.log('URL API listening');
});
