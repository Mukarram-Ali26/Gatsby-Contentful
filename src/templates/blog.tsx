import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { 
  
  
 } from "gatsby-source-contentful/rich-text"
import { Link } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

export default function Blog({pageContext}) {
    const {postDetail} = pageContext
    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.EMBEDDED_ASSET]: node => {
          return (
            <>
              <h2>Embedded Asset</h2>
              <pre>
                <code>{JSON.stringify(node, null, 2)}</code>
              </pre>
            </>
          )
        },
      },
    }

    

    let data  = JSON.parse(postDetail.content.raw)
  return <div>
    <h1>{postDetail.title}</h1>
    <br />
    <p>{postDetail.author}</p>
    <br />
    <img src={postDetail.image.fluid.src}/>
    <br />
    {documentToReactComponents(data, options)}
      
      <div dangerouslySetInnerHTML={{__html: JSON.stringify(postDetail.content.raw)
      
    }}></div>
      <button><Link to='/'>Go Back</Link></button>
  </div>
}
