import React, { useState } from "react";
import { timeStamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFirestore from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
function Comments({project}) {
  const [newComment, setComment] = useState("");
  const {user} = useAuthContext()
  const {updateDocument,response} = useFirestore('project')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(project.comments)
        const commentToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content:newComment,
            createdAt: timeStamp.fromDate(new Date()),
            id:Math.random()
        }

        await updateDocument(project.id,{
            comments:[...project.comments,commentToAdd]
        })
        if(!response.error){
            setComment('')
        }
    }

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <ul>
        {project.comments.length > 0 && project.comments.map(comment => (
          <li key={comment.id}>
            <div className="comment-author">
              <Avatar src={comment.photoURL} />
              <p>{comment.displayName}</p>
            </div>
            <div className="comment-date">
              <p>{formatDistanceToNow(comment.createdAt.toDate(),{addSuffix:true})}</p>
            </div>
            <div className="comment-content">
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new Comment:</span>
          <textarea
            required
            onChange={(e) => setComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn" >Add Comment</button>
      </form>
    </div>
  );
}

export default Comments;
