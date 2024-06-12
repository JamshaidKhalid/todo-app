const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const supabase = require('./config/supabaseClient');
dotenv.config();

const allowedOrigins = ['https://todo-app-react-vite-ts.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// app.get('/', async (req, res) => {
//     try {
//       const { data, error } = await supabase.from('todos').select('*');
//       if (error) throw error;
//       res.json(data);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       res.status(500).send('Database connection failed');
//     }
//   });

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.use('/auth', require('./routes/auth.route'));
app.use('/todos', require('./routes/todo.route'));





const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    }
);