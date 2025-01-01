const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`app is running on http://localhost:${PORT}`);
});



// app.listen(PORT, () => {
//   console.log(`app is running on http://localhost:${PORT}`);
// });