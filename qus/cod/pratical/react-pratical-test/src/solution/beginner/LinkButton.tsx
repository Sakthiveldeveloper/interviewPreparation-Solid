import react, { useState } from 'react';

function LikeButton () {
    const[like, SetLiked] = useState(false);
    const[count, SetCount] = useState(0);
    const hanbdleLiked = () => {
        if(like) {
            SetLiked(false);
            SetCount(count-1);
        } else {
            SetLiked(true);
            SetCount(count-1);
        }
    }
    return(
            <div>
                <button
                onClick={hanbdleLiked}

                >
                    {like? "liked" : "Like"} 
                </button>
                <p>
                    {count} {count ===1 ? "like" : 'Likes'}
                </p>
            </div>
    )
}
export default LikeButton;