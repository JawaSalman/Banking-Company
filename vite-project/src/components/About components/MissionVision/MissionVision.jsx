/**
 * MissionVision Component
 * -----------------------
 * This component renders the "Mission & Vision" section of the website.
 * It displays:
 *  - A section header with title and description
 *  - A list of items (Mission, Vision, etc.)
 *  - Each item contains:
 *      - A title and descriptive text
 *      - A background image
 *      - A foreground item image
 *
 * The data is imported from a separate file (missionVisionData),
 * allowing easy content updates without touching the component code.
 */

import './MissionVision.css'

// Import the data for Mission & Vision section
import missionVisionData from './MissionVisinData' // Make sure the filename is correct

const MissionVision = () => {
  // Destructure the data from imported missionVisionData
  const { background, title, description, items } = missionVisionData

  return (
    <div className="ma-mission-vision-container">
      {/* Section header with title and description */}
      <div className="ma-header">
        <h1 className="ma-title">{title}</h1>
        <p className="ma-description">{description}</p>
      </div>

      {/* List of Mission/Vision items */}
      <div className="ma-list">
        {items.map((item, index) => (
          <div className="ma-item" key={index}>
            {/* Item text content */}
            <div className="ma-item-data">
              <h2 className="ma-item-title">{item.title}</h2>
              <p className="ma-item-text">{item.text}</p>
            </div>

            {/* Item images: background and foreground */}
            <div className="ma-image-wrapper">
              {/* Background image (same for all items) */}
              <img className="ma-bg-image" src={background} alt="" />

              {/* Foreground image (specific to each item) */}
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
  )
}

export default MissionVision
