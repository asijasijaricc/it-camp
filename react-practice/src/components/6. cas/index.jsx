import Card from "./card";
import Kartica from "./kartica";

const Class6 = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <Card name="Asija" surname="Sijaric" />
      <Card name="Petar" surname="Petrovic" />
      <Card name="Jovan" surname="Jovanovic" />
      <Card name="Amela" surname="Sijaric" />
      <Card name="Samed" surname="Sijaric" />
      <Card name="Ivana" surname="Ivanovic" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          marginLeft: "160px",
          marginTop: "50px",
        }}
      >
        <Kartica
          img="https://cdn.icon-icons.com/icons2/1875/PNG/512/download_120262.png"
          broj="2.7k"
          fajl="Downloads"
        />
        <Kartica
          img="data:image/png;base64,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"
          broj="1.3k"
          fajl="Users"
        />
        <Kartica
          img="data:image/png;base64,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"
          broj="74"
          fajl="Files"
        />
        <Kartica
          img="https://www.creativefabrica.com/wp-content/uploads/2020/08/12/Shield-Icon-Graphics-4941849-1.jpg"
          broj="46"
          fajl="Places"
        />
      </div>
    </div>
  );
};

export default Class6;