const path = require("path")
exports.createPages=async ({graphql,actions})=>{
    const {createPage}=actions
    const response=await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
            title
            author
            image {
              fluid {
                src
              }
            }
            content {
              raw
            }
          }
        }
      } 
      }`)
      // console.log(JSON.stringify(response));
      response.data.allContentfulPost.edges.forEach(({node}) => {
       
          createPage({
              path:`/${node.slug}`,
              component:path.resolve("./src/templates/blog.tsx")
              ,
              context:{
                  postDetail:node
              }
          })
          
      });
}