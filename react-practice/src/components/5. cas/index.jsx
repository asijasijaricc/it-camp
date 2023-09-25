import BlogPost from "./BlogPost";
import Avatar from "./avatar";

const Class5 = () => {
  return (
    <div>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <div
        style={{
          display: "flex",
          flaxWrap: "wrap",
          margin: "30px",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Avatar name="Asija Sijaric" />
        <Avatar name="Lajla Sijaric" />
        <Avatar name="Lamija Sijaric" />
      </div>
    </div>
  );
};

export default Class5;
