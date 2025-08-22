import Parentcard from "./Parentcard";
import IdiolTalk from "./IdiolTalk";

const Homepage = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide mb-3">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dqlex5zga/image/upload/v1755839774/image-2_svu5xz.jpg" className="d-block w-100 h-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dqlex5zga/image/upload/v1755839778/image-4_qidhwj.jpg" className="d-block w-100 h-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dqlex5zga/image/upload/v1755839776/image-3_rfjqik.jpg" className="d-block w-100 h-75" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dqlex5zga/image/upload/v1755839772/image-1_rqhww7.jpg" className="d-block w-100 h-75" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Parentcard />
      <div className="mt-3 ">
        <IdiolTalk />
      </div>
    </div>
  );
};

export default Homepage;
