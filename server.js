//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/marvel-heroes123'
app.use(express.static(__dirname + './dist/demo'));

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});

app.get('*', function(req,res) {
  // Replace the '/dist/marvel-heroes123/index.html'
  res.sendFile(path.join(__dirname + './dist/demo/index.html'));
});
