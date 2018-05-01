
const db = require('../../models');

exports.add = function (req, res) {

    var obj = {
        
        getToken: function () {
            var token = jwt.sign({
                id: this.id
            }, secret);
            return token;
        }
    }
}