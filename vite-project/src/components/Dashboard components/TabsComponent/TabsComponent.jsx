
import { useState } from "react";
import { pages, sections } from "../dashboardData";
import "./TabsComponent.css";

/**
 * TabsComponent
 * -------------
 * A navigation component that allows switching between:
 * - Pages (top-level tabs)
 * - Sections (dependent on selected page)
 *
 * Props:
 * - onChange(pageId, sectionId):
 *   Callback fired whenever the active page or section changes
 */
const TabsComponent = ({ onChange }) => {

  // Currently selected page ID
  const [activePage, setActivePage] = useState(null);

  // Currently selected section ID
  const [activeSection, setActiveSection] = useState(null);

  /**
   * Handle page change
   * ------------------
   * - Updates active page
   * - Resets active section
   * - Notifies parent component
   */
  const changePage = (pageId) => {
    setActivePage(pageId);
    setActiveSection(null);
    onChange(pageId, null);
  };

  /**
   * Handle section change
   * ---------------------
   * - Updates active section
   * - Notifies parent component with current page
   */
  const changeSection = (sectionId) => {
    setActiveSection(sectionId);
    onChange(activePage, sectionId);
  };

  return (
    <div className="ma-tabs">

      {/* Pages tabs */}
      <ul className="ma-pages-tabs">
        {pages.map((page) => (
          <li
            key={page.id}
            onClick={() => changePage(page.id)}
            className={activePage === page.id ? "active" : ""}
          >
            {page.name}
          </li>
        ))}
      </ul>

      {/* Sections tabs (shown only when a page is selected) */}
      <ul className="ma-sections-tabs">
        {sections[activePage]?.map((section) => (
          <li
            key={section.id}
            onClick={() => changeSection(section.id)}
            className={activeSection === section.id ? "active" : ""}
          >
            {section.name}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TabsComponent;
