const express = require('express');

const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('<h1>Hello</h1><p>I am paragraph text. I should put a file here</p>'));

app.listen({ port }, console.log(`Now listening on PORT ${port}`));
