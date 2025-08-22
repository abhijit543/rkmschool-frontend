import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactPlayer from "react-player";
import "./Gallery.css";

const ImageGalleryComponent = () => {
  const images = [
    { original: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838470/4_fq41vd.jpg", thumbnail: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838470/4_fq41vd.jpg" },
    { original: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838453/3_v6kf2e.jpg", thumbnail: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838453/3_v6kf2e.jpg" },
    { original: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838346/2_k2af2t.jpg", thumbnail: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838346/2_k2af2t.jpg" },
    { original: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838337/1_x1kbvf.jpg", thumbnail: "https://res.cloudinary.com/dqlex5zga/image/upload/v1755838337/1_x1kbvf.jpg" },
  ];

  const videoUrls = [
    "https://www.youtube.com/watch?v=ZJPgdKwXYmU",
    "https://www.youtube.com/watch?v=isBOiHm6jyU",
    "https://www.youtube.com/watch?v=7SYuGpY88JI",
    "https://www.youtube.com/watch?v=YGlabG8LFz0",
    "https://www.youtube.com/watch?v=QQ970ZeFDqA",
    "https://www.youtube.com/watch?v=QQ970ZeFDqA",
  ];

  const [selectedVideo, setSelectedVideo] = useState(videoUrls[0]);

  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    return match ? match[1] : "";
  };

  return (
    <>
      <div className="gallery-container">
        <h2 className="gallery-title">Image Gallery</h2>
        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={true} useBrowserFullscreen={true} showThumbnails={true} slideDuration={400} slideInterval={2000} autoPlay={false} />
      </div>

      <div className="video-container">
        <h2 className="gallery-title">RKM Videos</h2>
        <div className="player-wrapper mb-4">
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

        <div className="video-scroll-container">
          {videoUrls.map((videoUrl, index) => (
            <div key={index} className={`video-card ${selectedVideo === videoUrl ? "active" : ""}`} onClick={() => setSelectedVideo(videoUrl)}>
              <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(videoUrl)}/0.jpg`} alt="Video thumbnail" className="video-thumbnail" />
              <div className="play-btn">▶</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGalleryComponent;
