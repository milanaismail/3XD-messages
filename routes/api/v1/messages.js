const express = require('express'); // om iets te requiren moet je exporten
const router = express.Router(); // router functie

const app = express();
app.use(express.json());

let messages = [];

// GET /api/v1/messages
router.get('/', (req, res) => {
  username = req.query.username;
  if (req.query.username){
  res.status(200).json({
    status: 'success',
    message: 'Hello, World!',
    data: {
      messages: [
        {
          id: 1,
          message: 'Hello, World!',
          user : username
        },
        {
          id: 2,
          message: 'Hello, World!',
          user : username
        },
        {
          id: 3,
          message: 'Hello, World!',
          user : username
        }
      
      ]
    }
  });
}
});

//get with id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: 'success',
    message: `Message ${id} retrieved!`,
    data: {
      message: 'Hello, World!'
    }
  });
});



// POST /api/v1/messages 
router.post('/', (req, res) => {
  const message = req.body.message;
  const user = req.body.user;
  messages.push(message);
  res.status(201).json({
    status: 'success',
    message: 'Message added!',
    data: {
      message: message,
      user : user
    }
  });
});

// PUT /api/v1/messages/:id

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const message = req.body.message;
  messages[id] = message;
  res.status(200).json({
    status: 'success',
    message: `Message ${id} updated!`,
    data: {
      message: message
    }
  });
}
);

// DELETE /api/v1/messages/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  messages.splice(id, 1);
  res.status(204).json({
    status: 'success',
    message: `Message ${id} deleted!`
  });
});

module.exports = router; // exporteren van router