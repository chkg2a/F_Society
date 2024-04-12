import React from "react";

const Post = (props) => {
  return (
    <div className="card w-[40rem] bg-primary text-primary-content">
      <div className="card-body">
        <img
          height="200px"
          width="320px"
          src={props.image}
          alt="blog image page"
        />
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
