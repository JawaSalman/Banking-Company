
import { useEffect, useState } from "react";
import "./MissionVision.css";
import missionVisionData from "./MissionVisionData";

const STORAGE_KEY = "tableData-3-1";

/**
 * MissionVision Component
 * -----------------------
 * Displays a mission & vision section with text and images.
 * Data is persisted in localStorage so changes survive page reloads.
 */
const MissionVision = () => {

  /**
   * State: items
   * -------------
   * Initializes from localStorage if available,
   * otherwise falls back to default data from MissionVisionData.
   */
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : missionVisionData.items;
  });

  /**
   * Effect: localStorage sync
   * -------------------------
   * Whenever `items` changes, update localStorage
   * to keep the data persistent.
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Destructure static content for easier access
  const { background, title, description } = missionVisionData;

  return (
    <div className="ma-mission-vision-container">
      
      {/* Header section with title and description */}
      <div className="ma-header">
        <h1 className="ma-title">{title}</h1>
        <p className="ma-description">{description}</p>
      </div>

      {/* List of mission/vision items */}
      <div className="ma-list">
        {items.map((item) => (
          
          // Individual mission/vision card
          <div className="ma-item" key={item.id}>
            
            {/* Textual content */}
            <div className="ma-item-data">
              <h2 className="ma-item-title">{item.title}</h2>
              <p className="ma-item-text">{item.text}</p>
            </div>

            {/* Image container with background + foreground image */}
            <div className="ma-image-wrapper">
              <img
                className="ma-bg-image"
                src={background}
                alt=""
              />
              <img
                className="ma-item-image"
                src={item.image}
                alt={item.title}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
