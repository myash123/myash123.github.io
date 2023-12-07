import './comment.css';
import logoImage from '../../assets/logo192.png';
import favoriteImage from '../../assets/favorite.svg';
import uploadImage from '../../assets/upload.svg';

export default function Comment(props) {
    return (
        <div className="comment-container">
            <img className="user-image" src={logoImage} alt="N/A" />
            <div className="comment-content">
                <h1 className="user-name">{props.userName}</h1>
                <h2 className="user-title">{props.userTitle}</h2>
                <p className="user-comment">{props.userComment}</p>
                <div className="user-actions">
                    <img className="user-action-image" src={favoriteImage} alt="N/A" />
                    <img className="user-action-image" src={uploadImage} alt="N/A" />
                </div>
            </div>
        </div>
    )
}