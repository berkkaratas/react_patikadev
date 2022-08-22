import axios from "axios";

 const getData= async (userId) => {

     // User
     const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+userId);

     // Posts
     const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ userId);

     console.log({user, posts});
} 

export default getData;
