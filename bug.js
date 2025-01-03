```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("650e67890234567890abcdef")},{"$inc":{"counter": -1}});
```