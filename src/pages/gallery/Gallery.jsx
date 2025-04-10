import GalleryItem from "../../components/galleryItem/GalleryItem";
import "./gallery.scss";

function getHeight () {
  const random = Math.floor(Math.random() * 5) + 1;
  const map = {
    1: "1000",
    2: "1400",
    3: "1300",
    4: "1600",
    5: "1200",
  };

  return `${map[random]}!`;
};

const galleryList = Array.from({ length: 16 }, (_, i) => ({
  height: getHeight(),
  img: (i+1) + ".jpg",
}));

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="galleryWrapper">
        {galleryList.map((image, index) => (
          <GalleryItem key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
