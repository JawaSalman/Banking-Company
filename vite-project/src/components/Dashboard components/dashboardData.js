// ================================
// Website Pages Definition
// ================================
export const pages = [
    {
        id: 1,
        name: 'Home page' // Main landing page
    },
    {
        id: 2,
        name: 'Careers page' // Careers and job listings page
    },
    {
        id: 3,
        name: 'About page' // About the company page
    },
    {
        id: 4,
        name: 'Security page' // Security and protection information page
    }
];

// ==================================================
// Sections mapped to each page by page ID
// Key = page ID, Value = list of related sections
// ==================================================
export const sections = {

  // Sections for Home page
  1: [
    { id: 0, name: 'Our Products' }, // Products section
    { id: 1, name: 'Our Features' }, // Features section
    { id: 2, name: 'Frequently Asked Questions' } // FAQ section
  ],

  // Sections for Careers page
  2: [
    { id: 0, name: 'Our Values' }, // Company values
    { id: 1, name: 'Our Benefits' }, // Employee benefits
    { id: 2, name: 'Job Openings' } // Available job positions
  ],

  // Sections for About page
  3: [
    { id: 0, name: "How We Protect You" }, // Security explanation
    { id: 1, name: "Mission & Vision" } // Mission and vision section
  ]

};

// ===================================================
// Table Schemas Definition
// Defines required fields for each table
// Format: "pageId-sectionId"
// ===================================================
export const tableSchemas = {

    // Mission & Vision table (About page)
    '3-1': ['title', 'text'],

    // Features table (Home page)
    '1-1': ['title', 'text'],

    // FAQs table (Home page)
    '1-2': ['question', 'answer']

};
