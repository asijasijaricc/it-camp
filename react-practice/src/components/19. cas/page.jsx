import Avatar from "./avatar";
import Baner from "./baner";
import Button from "./button";
import Divider from "./divider";
import Sec from "./secdivider";
import Text from "./text";

const Page = () => {
  return (
    <div>
      <Baner slika="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbEXc4O9f2fV9xcfJFiv9xBtWdneEnX7_AQ&usqp=CAU" />
      <div style={{ display: "flex", marginLeft: "400px", marginTop: "70px" }}>
        <div
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar slika2="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
          <Text type="title" text="Asija Sijaric" />
          <Divider />
          <Text
            type="p"
            text="Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland."
          />
        </div>
        <Sec />
        <div
          style={{
            width: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "150px",
          }}
        >
          <Text
            type="p"
            text="Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn."
          />
          <div style={{ marginRight: "510px" }}>
            <Button tek="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
