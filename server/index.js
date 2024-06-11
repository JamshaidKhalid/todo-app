const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const supabase = require('./config/supabaseClient');
dotenv.config();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    try {
      const { data, error } = await supabase.from('todos').select('*');
      if (error) throw error;
      res.json(data);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Database connection failed');
    }
  });


app.use('/auth', require('./routes/auth.route'));





const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    }
);