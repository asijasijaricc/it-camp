import Avatar from "./avatar";
import Baner from "./baner";
import Button from "./button";
import Divider from "./divider";
import Text from "./text";

const Page = () => {
  return (
    <div>
      <Baner slika="https://marketplace.canva.com/EAFCO6pfthY/1/0/800w/canva-blue-green-watercolor-linktree-background-uZtwBmdoPsE.jpg" />
      <div>
        <Avatar slika2="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
        <Text type="title" text="Asija Sijaric" />
        <Divider />
        <Text type="p" text="dugo" />
      </div>
      <div>
        <Text type="p" text="dugo" />
        <Button title="Learn More" />
      </div>
    </div>
  );
};

export default Page;
