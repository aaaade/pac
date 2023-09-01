import { useEffect, useState } from "react";
import image1 from "../images/1.png";
import image2 from "../images/2.png";

const imagesAndTextData = [
  {
    imageUrl: image1,
    title: "Image 1",
    description: "Description for Image 1",
  },
  {
    imageUrl: image2,
    title: "Image 2",
    description: "Description for Image 2",
  },
  // Add more image/text data objects as needed
];

const ImageSliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Use a timer to change the current index at regular intervals
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagesAndTextData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change the image and text every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [imagesAndTextData]);

  const currentData = imagesAndTextData[currentIndex];

  const imageStyle = {
    backgroundImage: `url(${currentData.imageUrl})`,
  };

  return (
    <div className="slider-section" style={imageStyle}>
     <div className={`text ${currentIndex !== 0 ? 'slide-in' : ''}`}>
        <h2>{currentData.title}</h2>
        <p>{currentData.description}</p>
      </div>
    </div>
  );
};

export default ImageSliderSection;
