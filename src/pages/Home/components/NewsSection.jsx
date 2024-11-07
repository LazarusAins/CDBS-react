import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";

function NewsSection() {
  return (
    <div className="py-4 pr-4 w-100 border border-brand mr-96 mb-36 mt-96 slide-container">
      <div className="flex gap-1 photobanner overflow-hidden">
        <img src={image1} className="object-fill h-images-carousel w-1/2" />
        <img src={image2} className="object-fill h-images-carousel w-1/2" />
        <img src={image1} className="object-fill h-images-carousel w-1/2" />
        <img src={image2} className="object-fill h-images-carousel w-1/2" />
        <img src={image1} className="object-fill h-images-carousel w-1/2" />
        <img src={image2} className="object-fill h-images-carousel w-1/2" />
        <img src={image1} className="object-fill h-images-carousel w-1/2" />
        <img src={image2} className="object-fill h-images-carousel w-1/2" />
      </div>
    </div>
  );
}

export default NewsSection;
