import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactPlayer from "react-player";

const ImageGalleryComponent = () => {
  const images = [
    { original: "/gallery/1.jpg", thumbnail: "/gallery/1.jpg" },
    { original: "/gallery/2.jpg", thumbnail: "/gallery/2.jpg" },
    { original: "/gallery/3.jpg", thumbnail: "/gallery/3.jpg" },
    { original: "/gallery/4.jpg", thumbnail: "/gallery/4.jpg" },
  ];

  const videoUrls = [
    "https://www.youtube.com/watch?v=ZJPgdKwXYmU",
    "https://www.youtube.com/watch?v=isBOiHm6jyU",
    "https://www.youtube.com/watch?v=7SYuGpY88JI",
    "https://www.youtube.com/watch?v=YGlabG8LFz0",
    "https://www.youtube.com/watch?v=QQ970ZeFDqA",
  ];

  const [selectedVideo, setSelectedVideo] = useState(videoUrls[0]);
  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    return match ? match[1] : "";
  };
  return (
    <>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Image Gallery</h2>
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={true} useBrowserFullscreen={true} showThumbnails={true} slideDuration={400} slideInterval={2000} autoPlay={false} />
      </div>

      <div className="container mt-5">
        <h2 className="text-2xl font-bold text-white text-center mb-4">RKM Videos</h2>
        <div className="mb-4">
          <ReactPlayer
            url={selectedVideo}
            width="100%"
            height="480px"
            controls
            playing
            config={{
              youtube: {
                playerVars: {
                  showinfo: 1,
                  modestbranding: 1,
                  rel: 0,
                },
              },
            }}
          />
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {videoUrls.map((videoUrl, index) => (
            <div key={index} className="col" onClick={() => setSelectedVideo(videoUrl)} style={{ cursor: "pointer" }}>
              <div className="card bg-dark text-white">
                <div className="position-relative" onClick={() => setSelectedVideo(videoUrl)}>
                  <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(videoUrl)}/0.jpg`} alt="Video thumbnail" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                  <button className="btn btn-danger position-absolute top-50 start-50 translate-middle">▶</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGalleryComponent;
