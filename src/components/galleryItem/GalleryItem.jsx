import "./galleryItem.scss";

const GLOBELFOLDER = "./asset/";

const GalleryItem = ({ image }) => {

  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(parseInt(image.height) / 100)}` }}
    >
      <img src={`${GLOBELFOLDER}${image.img}`} alt="" />
    </div>
  );
};

export default GalleryItem;
