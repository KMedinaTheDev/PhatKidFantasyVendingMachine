var User = require('../app/models/user');

var user = {
    name: "Admin User",
    email: "admin@BeanCafe.com",
    role: "admin"
}

User.create(user, function(e) {
    if (e) {
        throw e;
    }
});
