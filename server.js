const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/book', (req, res) => {
  const { first_name, last_name, address, phone } = req.body;
  console.log("Form Data:", req.body);

  // Respond with JSON
  res.json({ success: true, name: first_name });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
