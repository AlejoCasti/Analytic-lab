var express = require('express');
var app = express();

app.use(express.static('./dist/analytic-lab'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/analytic-lab/'}
  );
});
app.listen(process.env.PORT || 8080);