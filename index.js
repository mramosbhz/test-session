const app = require('./src/app')

const port = 8080

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})