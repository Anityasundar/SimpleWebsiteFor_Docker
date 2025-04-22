const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const messages = []; // in-memory storage

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/api/save', (req, res) => {
  const { name } = req.body;
  if (name) {
    messages.push(name);
    console.log('Saved:', name);
    res.json({ message: `Saved: ${name}` });
  } else {
    res.status(400).json({ message: 'Name is required' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
