import { useState } from "react";
import Wrapper from "../assets/wrappers/ProductImages";

const ProductImages = ({ images = [{ url: "" }] }) => {
  // [{url: ""}] <-- initially images is undefined
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <Wrapper>
      <img src={mainImg.url} alt="Main img" className="main" />
      <div className="gallery">
        {images.map((image, index) => (
          <img
            onClick={() => setMainImg(images[index])}
            key={index}
            src={image.url}
            alt={image.filename}
            className={`${image.url === mainImg.url ? "active" : null}`}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
