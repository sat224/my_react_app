function Navbar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "",
          background:
            "linear-gradient(153deg, rgba(0,14,36,1) 0%, rgba(49,9,121,1) 49%, rgba(96,0,255,1) 100%)",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            color: "white",
            margin: "0",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
