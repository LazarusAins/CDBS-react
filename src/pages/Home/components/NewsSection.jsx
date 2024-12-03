import HS1 from "../../../assets/gallery/HS1.jpg";
import HS2 from "../../../assets/gallery/HS2.jpg";
import HS3 from "../../../assets/gallery/HS3.jpg";

function NewsSection() {
  return (
    <div className="py-4 pr-4 w-100 border border-brand mr-96 mb-36 mt-96 slide-container">
      <div className="flex gap-1 photobanner overflow-hidden">
        <img src={HS1} className="object-fill h-images-carousel w-1/3" />
        <img src={HS2} className="object-fill h-images-carousel w-1/3" />
        <img src={HS3} className="object-fill h-images-carousel w-1/3" />
        <img src={HS1} className="object-fill h-images-carousel w-1/3" />
        <img src={HS2} className="object-fill h-images-carousel w-1/3" />
        <img src={HS3} className="object-fill h-images-carousel w-1/3" />
        <img src={HS1} className="object-fill h-images-carousel w-1/3" />
        <img src={HS2} className="object-fill h-images-carousel w-1/3" />
        <img src={HS3} className="object-fill h-images-carousel w-1/3" />

      </div>
    </div>
  );
}

export default NewsSection;
