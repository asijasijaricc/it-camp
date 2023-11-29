const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "260px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "330px",
          height: "450px",
          border: "none",
          backgroundColor: "#bae8e8",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "#24527a" }}>Create your account !!</h1>
        <h3 style={{ color: "#5dacbd" }}>Name</h3>
        <input type="text" />
        <h3 style={{ color: "#5dacbd" }}>Email</h3>
        <input type="text" />
        <h3 style={{ color: "#5dacbd" }}>Password</h3>
        <input type="text" />
        <h3 style={{ color: "#5dacbd" }}>Confirm password</h3>
        <input type="text" />
        <br />
        <button
          style={{
            width: "120px",
            height: "23px",
            backgroundColor: "#e3f6f5",
            borderColor: "#e3f6f5",
            borderRadius: "7px",
            color: "#24527a",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
