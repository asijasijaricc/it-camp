import Button from "./button";
import Color from "./color";
import Divider from "./divider";
import Icons from "./icons";
import Picture from "./picture";
import Size from "./size";
import Srce from "./srce";
import Star from "./star";
import Text from "./text";

const Card2 = () => {
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
        <Picture slika="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div style={{ width: "600px", marginLeft: "50px" }}>
        <Text type="h4" color="gray" text="BRAND NAME" />
        <Text type="h1" text="The Catcher in the Rye" bold />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Star value={3} />
            <Text type="normal" text="4 Reviews" />
            <Icons />
          </div>
          <Text
            type="normal"
            text="Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."
          />
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
                  <Color />
                  <Color />
                  <Color />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Text type="normal" text="Size" />
                <div style={{ marginTop: "16px", marginLeft: "8px" }}>
                  <Size />
                </div>
              </div>
            </div>
            <Divider />
            <div
              style={{ display: "flex", alignItems: "center", gap: "410px" }}
            >
              <Text type="normal" text="$58.00" bold />
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
