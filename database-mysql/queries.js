var db = require('./index');

var queryDatabase = function(query) {
  return new Promise((resolve, reject) => {
    db.query(query, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

var selectAll = function() {
  return queryDatabase('SELECT handle, email, avatar_url FROM users');
};

var createUser = function(user) {
  return queryDatabase(`INSERT INTO users (id, handle, email, avatar_url, github_token)  
                        VALUES (null, '${user.login}', '${user.email}', '${user.avatar_url}', '${user.github_token}')`);
};

var selectUser = function(attribute) {
  return queryDatabase(`SELECT * FROM users WHERE ${attribute.field} = '${attribute.value}'`);
};

var selectAllTakeaways = function() {
  return queryDatabase('SELECT * FROM takeaways');
};

var createTakeaway = function(takeaway) {
  return queryDatabase(`INSERT INTO takeaways (id, takeaway, user_id)  
                        VALUES (null, '${takeaway.takeaway}', '${takeaway.user_id}')`);
};


module.exports = {
  selectAll: selectAll,
  selectUser: selectUser,
  createUser: createUser,
  selectAllTakeaways: selectAllTakeaways,
  createTakeaway: createTakeaway,
};

