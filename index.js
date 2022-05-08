const {ApolloServer,gql} = require("apollo-server");

const posts=[
    {
        title:"post 1",
        id : "1"
    },
    {
        title: "post 2",
        id : "2"
    }
]

//schema
const typeDefs= gql`
type Post{
    id:String,
    title:String
}

type Query{
  posts:[Post]
}

type Mutation{
    addPost(title:String):Post
}
`;

// resolver
const resolvers = {
    Query:{
        posts:()=> posts
    },
    Mutation:{
        addPost:(parent,{title})=>{
            posts.push({id : posts.length + 1 , title})
            return posts[posts.length - 1]
        }
    }
}
//server
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(2060 , ()=>{
    console.log("server stareted")
})