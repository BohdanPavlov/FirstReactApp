import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
                 alt="avatar"/>
            <span className={classes.message}>{props.message}</span>
            <div>
                <span>{props.likesCount} Likes</span>
            </div>
        </div>
    )
}

export default Post