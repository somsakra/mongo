db = db.getSiblingDB('marker-test');

db.createCollection('user_test');

db.user_test.insertMany([
 {
    userName: 'somsak',
    userEmail: 'somsak@marker.com'
  },
  {
    userName: 'john',
    userEmail: 'john@doe.com'
  },
  {
    userName: 'tong',
    userEmail: 'tong@github.com'
  }  
]);