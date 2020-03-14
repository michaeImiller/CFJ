import React, {useState, useEffect} from "react"
import files from './data/data';

function Tree({ comment }) {
  const nestedComments = (comment.children || []).map(comment => {
    return (
      <div>
        <button> Show children </button>
        <Tree key={comment.id} comment={comment} type="child" />
      </div>
    );
  })
 
  return (
    <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
      <div>{comment.name}</div>
      {nestedComments}
    </div>
  )
}
 
function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    setData(files)
  });
  console.log(data);
  
  
  return (
    <div>
      {
        data.map((comment) => {
          return (
            <Tree key={comment.id} comment={comment} />
          )
        })
      }
    </div>
  )
}
 
export default App;