import React from "react";
import ReactDOM from "react-dom/client";
import NewCard from "./components/9. cas/newCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ display: "flex",flexDirection:"column" gap: " 20px" }}>
      <NewCard
        slika="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwStAG_fMs0-huIwtWljxrR1X1Td5qCRH_-mnrbe-x&s"
        jedan="CATEGORY"
        htag="The Catalyzer"
        tekstic="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        nekilink="Learn More"
      />
      <NewCard
        slika="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwStAG_fMs0-huIwtWljxrR1X1Td5qCRH_-mnrbe-x&s"
        jedan="CATEGORY"
        htag="The Catalyzer"
        tekstic="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        nekilink="Learn More"
      />
      <NewCard
        slika="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwStAG_fMs0-huIwtWljxrR1X1Td5qCRH_-mnrbe-x&s"
        jedan="CATEGORY"
        htag="The Catalyzer"
        tekstic="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        nekilink="Learn More"
      />
    </div>
  </React.StrictMode>
);
