module.exports = function (app, fs) {

    app.get('/', function (req, res) {
        
        console.log('root directory 실행');
        
        res.render('index.html');
    })
    
}