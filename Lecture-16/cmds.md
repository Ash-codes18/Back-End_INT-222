test> use Ash
switched to db Ash
Ash> arr = [{_id:6,name:'halua',address:'noida',marks:78},{_id:7,name:'halwa',address:'gurugram',marks:45}]
[
  { _id: 6, name: 'halua', address: 'noida', marks: 78 },
  { _id: 7, name: 'halwa', address: 'gurugram', marks: 45 }
]
Ash> db.Ash_Info.find()
[
  {
    _id: ObjectId('660b9d4530272242c49f990a'),
    First_Name: 'Ashmit',
    Last_name: 'Mehta',
    Address: 'Delhi',
    Age: 19
  },
  {
    _id: ObjectId('660b9d9530272242c49f990b'),
    Likes: 'Manhwas',
    Plays: 'Valorant',
    Wants: 'life'
  },
  {
    _id: ObjectId('660b9ed630272242c49f990c'),
    Feels: 'Sleepy',
    Needs: 'Energy',
    doesnt: 'Workout'
  },
  { _id: 4, Always: 'Tired', Lacks: 'Motivation', Never: 'Strives' },
  { _id: 5, Requires: 'Dedication', Craves: 'Food', Gets: 'Bored' }
]
Ash> show collections
Ash_info
Ash_Info
Ash> db.Ash_Info.insertMany(arr)
{ acknowledged: true, insertedIds: { '0': 6, '1': 7 } }
Ash> db.Ash_Info.find()
[
  {
    _id: ObjectId('660b9d4530272242c49f990a'),
    First_Name: 'Ashmit',
    Last_name: 'Mehta',
    Address: 'Delhi',
    Age: 19
  },
  {
    _id: ObjectId('660b9d9530272242c49f990b'),
    Likes: 'Manhwas',
    Plays: 'Valorant',
    Wants: 'life'
  },
  {
    _id: ObjectId('660b9ed630272242c49f990c'),
    Feels: 'Sleepy',
    Needs: 'Energy',
    doesnt: 'Workout'
  },
  { _id: 4, Always: 'Tired', Lacks: 'Motivation', Never: 'Strives' },
  { _id: 5, Requires: 'Dedication', Craves: 'Food', Gets: 'Bored' },
  { _id: 6, name: 'halua', address: 'noida', marks: 78 },
  { _id: 7, name: 'halwa', address: 'gurugram', marks: 45 }
]
Ash> db.Ash_Info.update({_id:6},{$set:{address:'Delhi'}})
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Ash> db.Ash_info.find()
[
  { _id: 5, name: 'halua', address: 'noida', marks: 78 },
  { _id: 6, name: 'halwa', address: 'gurugram', marks: 45 }
]
Ash> db.Ash_Info.find()
[
  {
    _id: ObjectId('660b9d4530272242c49f990a'),
    First_Name: 'Ashmit',
    Last_name: 'Mehta',
    Address: 'Delhi',
    Age: 19
  },
  {
    _id: ObjectId('660b9d9530272242c49f990b'),
    Likes: 'Manhwas',
    Plays: 'Valorant',
    Wants: 'life'
  },
  {
    _id: ObjectId('660b9ed630272242c49f990c'),
    Feels: 'Sleepy',
    Needs: 'Energy',
    doesnt: 'Workout'
  },
  { _id: 4, Always: 'Tired', Lacks: 'Motivation', Never: 'Strives' },
  { _id: 5, Requires: 'Dedication', Craves: 'Food', Gets: 'Bored' },
  { _id: 6, name: 'halua', address: 'Delhi', marks: 78 },
  { _id: 7, name: 'halwa', address: 'gurugram', marks: 45 }
]
Ash> db.Ash_Info.updateMany({address:'Delhi'},{$set:{address:'Goa'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Ash> db.Ash_Info.find()
[
  {
    _id: ObjectId('660b9d4530272242c49f990a'),
    First_Name: 'Ashmit',
    Last_name: 'Mehta',
    Address: 'Delhi',
    Age: 19
  },
  {
    _id: ObjectId('660b9d9530272242c49f990b'),
    Likes: 'Manhwas',
    Plays: 'Valorant',
    Wants: 'life'
  },
  {
    _id: ObjectId('660b9ed630272242c49f990c'),
    Feels: 'Sleepy',
    Needs: 'Energy',
    doesnt: 'Workout'
  },
  { _id: 4, Always: 'Tired', Lacks: 'Motivation', Never: 'Strives' },
  { _id: 5, Requires: 'Dedication', Craves: 'Food', Gets: 'Bored' },
  { _id: 6, name: 'halua', address: 'Goa', marks: 78 },
  { _id: 7, name: 'halwa', address: 'gurugram', marks: 45 }
]
Ash> db.Ash_Info.deleteOne({address:'gurugram'})
{ acknowledged: true, deletedCount: 1 }
Ash> db.Ash_Info.find()
[
  {
    _id: ObjectId('660b9d4530272242c49f990a'),
    First_Name: 'Ashmit',
    Last_name: 'Mehta',
    Address: 'Delhi',
    Age: 19
  },
  {
    _id: ObjectId('660b9d9530272242c49f990b'),
    Likes: 'Manhwas',
    Plays: 'Valorant',
    Wants: 'life'
  },
  {
    _id: ObjectId('660b9ed630272242c49f990c'),
    Feels: 'Sleepy',
    Needs: 'Energy',
    doesnt: 'Workout'
  },
  { _id: 4, Always: 'Tired', Lacks: 'Motivation', Never: 'Strives' },
  { _id: 5, Requires: 'Dedication', Craves: 'Food', Gets: 'Bored' },
  { _id: 6, name: 'halua', address: 'Punjabi chaap samosa', marks: 78 }
]
Ash> db.Ash_Info.deleteMany({address:'Punjabi chaap samosa})
Uncaught:
SyntaxError: Unterminated string constant. (1:32)

> 1 | db.Ash_Info.deleteMany({address:'Punjabi chaap samosa})
    |                                 ^
  2 |

Ash> db.Ash_Info.deleteMany({address:'Punjabi chaap samosa'})
{ acknowledged: true, deletedCount: 1 }
Ash> db.Ash_Info.find()
[
  {
    _id: ObjectId('660b9d4530272242c49f990a'),
    First_Name: 'Ashmit',
    Last_name: 'Mehta',
    Address: 'Delhi',
    Age: 19
  },
  {
    _id: ObjectId('660b9d9530272242c49f990b'),
    Likes: 'Manhwas',
    Plays: 'Valorant',
    Wants: 'life'
  },
  {
    _id: ObjectId('660b9ed630272242c49f990c'),
    Feels: 'Sleepy',
    Needs: 'Energy',
    doesnt: 'Workout'
  },
  { _id: 4, Always: 'Tired', Lacks: 'Motivation', Never: 'Strives' },
  { _id: 5, Requires: 'Dedication', Craves: 'Food', Gets: 'Bored' }
]
Ash>