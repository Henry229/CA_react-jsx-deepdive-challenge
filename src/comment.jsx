import React from 'react';

// const defaultAvatar =
//   'https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2020/07/05194617/default-avatar.png';

const Comment = ({ avatar, name, date, comment }) => {
  return (
    <article>
      <header>
        {avatar ? (
          <img
            src={avatar}
            alt={`Avatar image of ${name ? ` of ${name}` : ''}`}
          />
        ) : (
          ''
        )}
        <p>{name || 'Unknown'}</p>
        <time>{date}</time>
      </header>
      <p>{comment}</p>
      <hr />
    </article>
  );
};

export default Comment;
