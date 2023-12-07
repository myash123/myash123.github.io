import './comment.css'
import logoImage from '../../assets/logo192.png';
import favoriteImage from '../../assets/favorite.svg';
import uploadImage from '../../assets/upload.svg';

export default function Comment() {
    return (
        <div className="comment-container">
            <img className="user-image" src={logoImage} alt="N/A" />
            <div className="comment-content">
                <h1 className="user-name">Michael Lamp</h1>
                <h2 className="user-title">Customer Success Man</h2>
                <p className="user-comment">I think this site is very cool and I'm a pretty nice guy</p>
                <div className="user-actions">
                    <img className="user-action-image" src={favoriteImage} alt="N/A" />
                    <img className="user-action-image" src={uploadImage} alt="N/A" />
                </div>
            </div>
        </div>
    )
}