const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <div>
        <img
          style={{ width: "600px", height: "600px", borderRadius: "7px" }}
          src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div style={{ width: "500px", height: "550px", marginLeft: "70px" }}>
        <div>
          <h4 style={{ color: "grey" }}>BRAND NAME</h4>
          <h1>The Catcher in the Rye</h1>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ color: "blue" }}>★★★★☆</p>
          <p style={{ marginLeft: "10px" }}>4 Reviews</p>
        </div>
        <div>
          <p style={{ fontSize: "20px" }}>
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "20px" }}>Color</p>
          <div style={{ margin: "5px" }}>
            <button
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                marginTop: "7px",
                backgroundColor: "white",
                margin: "3px",
              }}
            ></button>
            <button
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                marginTop: "7px",
                backgroundColor: "grey",
                margin: "3px",
              }}
            ></button>
            <button
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                marginTop: "7px",
                backgroundColor: "blue",
                margin: "3px",
              }}
            ></button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <p>Size</p>
            <select
              name=""
              id=""
              style={{ marginLeft: "10px", width: "60px", height: "40px" }}
            >
              <option value="SM">SM</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <h4>$58.00</h4>
          </div>
          <div
            style={{
              marginLeft: "300px",
            }}
          >
            <button
              style={{
                width: "70px",
                height: "40px",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Button
            </button>
            <button
              style={{
                marginLeft: "7px",
                borderRadius: "50%",
                color: "grey",
                border: "none",
                width: "50px",
                height: "50px",
                fontSize: "20px",
              }}
            >
              ♡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
