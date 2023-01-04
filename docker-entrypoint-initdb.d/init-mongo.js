db = db.getSiblingDB("marker");

db.createCollection("user");

db.user.insertMany([
  {
    userName: "somsak",
    userEmail: "somsakra@live.com",
  },
  {
    userName: "john",
    userEmail: "john@doe.com",
  },
  {
    userName: "tong",
    userEmail: "tong@github.com",
  },
]);
