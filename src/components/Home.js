const Home = ({ title, subtitle, description }) => (
  <div style={{height:'430px'}}className="home mt-1 ">
    <div className="col">
      <div className="col-md-8  my-2 bold offset-md-2">
        <h3 className="custom-h1">{title}</h3>
        <h5 className="display-8">{subtitle}</h5>
        <div className="description-box bg-dark text-white p-3  align-items-center">
          <p>Hello !!</p>
           <p className="lead text-justify">{description}</p>
        </div>
        {/* Add other relevant information */}
      </div>
    </div>
  </div>
);

export default Home;
