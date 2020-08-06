const person={name:"Jack Nickolson", age:26, phone:"0198292992", office:"Chittagong",gfName:"Bou"}

const {age}=person;
const  {phone}=person;
const {salary}=person;

// console.log(age, phone,salary);

const friends =['Shuvo', "Raz","Mredul","Shakib","Simon"]

const [firstFriend,secondFriend, ...older]=friends;

console.log(older);