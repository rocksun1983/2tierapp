const express = require('express');
const app = express();
const PORT = 3300;

// Middleware to parse JSON body
app.use(express.json());

// GET endpoint to confirm API is alive
app.get('/api', (req, res) => {
  res.json({ message: 'Backend is running.' });
});

// GET endpoint for /api/message (for browser testing)
app.get('/api/message', (req, res) => {
  res.send('API is working. Use POST to send data.');
});

// POST endpoint to receive message from frontend
app.post('/api/message', (req, res) => {
  const { message } = req.body;

  // Log to terminal
  console.log('Received from frontend:', message);

  // Respond to client
  res.json({
    status: 'success',
    reply: `Backend received: "${message}"`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
