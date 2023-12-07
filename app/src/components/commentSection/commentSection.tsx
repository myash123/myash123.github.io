import Comment from '../comment/comment.tsx';
import './commentSection.css';
import userData from '../../data/commentData.json';

export default function CommentSection() {

    interface UserData {
        id: string,
        userName: string,
        userTitle: string,
        userComment: string,
        numFavorites?: string,
        userImage?: string
    }

    const populateCommentList: (userData: UserData[] ) => JSX.Element[] = (userData) => {
        const data = userData.slice();
        const commentList = data.map((item) => (
            <Comment
                userName={item.userName}
                userTitle={item.userTitle}
                userComment={item.userComment}
                key={item.id}
            />    
        ));
        return commentList;
    }

    const commentList = populateCommentList(userData);

    return(
        <div className="comment-section-container">
            {commentList}
        </div>
    )
}