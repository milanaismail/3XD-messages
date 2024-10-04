const express = require('express'); // om iets te requiren moet je exporten
const router = express.Router(); // router functie

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

module.exports = router; // exporteren van router