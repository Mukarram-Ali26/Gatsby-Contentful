import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Button from "@material-ui/core/Button"  
import { useNavigate } from "@reach/router"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';




export default function Home() {
  const navigate = useNavigate()
  const data = useStaticQuery(graphql`
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
          
        }
      }
    }
  }
`)
const post = data.allContentfulPost.edges
console.log({post});

  return (
    <div>
      <div>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
          Blog site made by <b>Mukarram Ali</b> sample 
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      {post.map(({node}) => (
      <div className="home__blog" key={node.title}>
      <Card >
      <CardHeader        
        title={node.title}
        subheader={node.author}
      />
      <CardMedia><img src={node.image.fluid.src}/></CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      
        <Button
        color="primary"
        variant="contained"
        onClick={() => navigate(`${node.slug}`)}
      >Read More</Button>
        

     
    </Card>
      <br />

      
    </div>
      ))}
    </div>
  )
}
