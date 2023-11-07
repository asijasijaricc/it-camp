import { useState } from "react";
import Button from "./button";
import Color from "./color";
import Divider from "./divider";
import Icons from "./icons";
import Picture from "./picture";
import Size from "./size";
import Srce from "./srce";
import Star from "./star";
import Text from "./text";

const Card2 = (props) => {
  const { data } = props;
  const [img, setImg] = useState(data.imgs.white);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "180px",
      }}
    >
      <div>
        <Picture slika={img} alt="" />
      </div>
      <div style={{ width: "600px", marginLeft: "50px" }}>
        <Text type="h4" color="gray" text={data.brandTitle} />
        <Text type="h1" text={data.description} bold />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Star value={data.reviews} />
            <Text type="normal" text={data.reviewsCount + " " + "Reviews"} />
            <Icons />
          </div>
          <Text type="normal" text={data.tekstic} />
          <div>
            <div style={{ display: "flex", gap: "30px" }}>
              <div style={{ display: "flex" }}>
                <Text type="normal" text="Color" />
                <div
                  style={{
                    marginTop: "16px",
                    marginLeft: "8px",
                    display: "flex",
                  }}
                >
                  <Color
                    backgroundColor="white"
                    onClick={() => setImg(data.imgs.white)}
                  />
                  <Color
                    backgroundColor="blue"
                    onClick={() => setImg(data.imgs.blue)}
                  />
                  <Color
                    backgroundColor="grey"
                    onClick={() => setImg(data.imgs.grey)}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Text type="normal" text="Size" />
                <div style={{ marginTop: "16px", marginLeft: "8px" }}>
                  <Size list={data.sizes} />
                </div>
              </div>
            </div>
            <Divider />
            <div
              style={{ display: "flex", alignItems: "center", gap: "410px" }}
            >
              <Text type="price" text={data.price + " " + "$"} bold />
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button tekst="Button" />
                <Srce tekstic="♡" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
