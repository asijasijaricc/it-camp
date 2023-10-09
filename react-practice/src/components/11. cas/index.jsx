import Kartica from "./kartica";

const Class11 = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";

  const objectsList = [
    {
      title: "Nature Scene",
      url: "",
    },
    {
      title: "Cityscape",
      url: imageUrl,
    },
    {
      title: "Beach Sunset",
      url: imageUrl,
    },
    {
      title: "Mountain View",
      url: imageUrl,
    },
    {
      title: "Abstract Art",
      url: imageUrl,
    },
    {
      title: "Wildlife",
      url: imageUrl,
    },
    {
      title: "Space Exploration",
      url: imageUrl,
    },
    {
      title: "Food Delight",
      url: "",
    },
    {
      title: "Vintage Cars",
      url: imageUrl,
    },
    {
      title: "Travel Adventure",
      url: imageUrl,
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {objectsList.map((item, index) => {
        return <Kartica key={index} title={item.title} value={item.url} />;
      })}
    </div>
  );
};
export default Class11;
