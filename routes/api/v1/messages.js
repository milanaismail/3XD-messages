const express = require('express'); // om iets te requiren moet je exporten
const router = express.Router(); // router functie

const app = express();
app.use(express.json());
let messages = [];

// GET /api/v1/messages
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello, World!',
    data: {
      messages: [
        { message: 'Hello, World!' },
        { message: 'Hi, there!' },
        { message: 'Goodbye, World!' }
      ]
    }
  });
});

//get with id
router.get('/:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello, World user 1!',
    data: {
      message: 'Hello, World!'
    }
  });
});



// POST /api/v1/messages
router.post('/', (req, res) => {
  const message = req.body.message;
  messages.push(message);
  res.status(201).json({
    status: 'success',
    message: 'Message added!',
    data: {
      message: message
    }
  });
});




module.exports = router; // exporteren van router