import "./example.css";

import styles from "./example.modul.css";

const Example = () => {
  return (
    <div className="box">
      <p className="boxP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo
        cumque facere. Voluptatum corporis cupiditate ipsa aliquid suscipit a
        dolorum.
      </p>
      <h1 className={`boxh1 test ${styles.test}`}>Text</h1>
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt=""
        width={150}
        height={150}
      />
    </div>
  );
};

export default Example;
