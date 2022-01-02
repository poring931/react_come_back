import React from 'react';

const Postitem = (props) => {
    return (
        <div className='post'>
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
             {props.post.description}
          </div>
        </div>
        <div className="post__btn">
          <button>Удалить пост</button>
        </div>
      </div>
    );
};

export default Postitem;