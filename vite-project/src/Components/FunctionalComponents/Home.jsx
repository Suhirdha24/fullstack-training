import "../../assets/css/Home.css";

const Home = () => {
  const styling = {
    fontSize: "70px",
    textDecoration: "underline",
    color: "pink",
  };

  return (
    <div>
      <h1 style={styling} id="idSEg">This is Home Page</h1>
      <h2 id="idSEg">Testing Styling</h2>
      <p className="box-model">Hello</p>
    </div>
  );
};

export default Home;
