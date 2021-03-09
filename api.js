const APIKEY = process.env.APIKEY;

module.exports = function(app) {
    app.get("/search", (req, res) => {
        res.send(APIKEY)
    })
}