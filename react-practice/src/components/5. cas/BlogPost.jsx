import "./BlogPost.css";

const BlogPost = () => {
  return (
    <div className="container">
      <div className="left">
        <p className="title">CATEGORY</p>
        <p className="vreme">12 Jun 2019</p>
      </div>
      <div className="right">
        <p className="btitle">
          Bitters hashtag waistcoat fashion axe chia unicorn
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fuga quidem quo ipsam. Veritatis ipsa facere quia accusantium, nemo
          iure, odio eos, repellat est quisquam dolores fuga? Assumenda, unde
          odit.
        </p>
        <a className="link" href="http://www.google.com">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
