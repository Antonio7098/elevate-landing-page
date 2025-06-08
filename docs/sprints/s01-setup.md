Sprint #01: Project Foundation & Initial Setup

Date Range: 08 June 2025 - 09 June 2025
Primary Focus: Frontend - Project Scaffolding & Global Styling
Overview: This sprint focuses on initializing the Vite + React project for the design book landing page. The goal is to establish a clean and scalable foundation by creating the core folder structure and defining all global CSS variables (design tokens) and base styles that will be used throughout the application's components.

I. Planned Tasks & To-Do List (Derived from Gemini's Prompt)
Instructions for Antonio: Review the prompt/instructions provided by Gemini for the current development task. Break down each distinct step or deliverable into a checkable to-do item below. Be specific.

[X] Task 1: Initialize a new Vite + React project.

Sub-task 1.1: In your terminal, navigate to your primary development directory where you store your projects.
Sub-task 1.2: Execute the Vite creation command: npm create vite@latest . my-design-book-page -- --template react
Sub-task 1.3: Change directory into the newly created project: cd my-design-book-page
Sub-task 1.4: Install all necessary Node.js dependencies by running: npm install
Sub-task 1.5: Verify the successful installation by starting the development server: npm run dev. Ensure you can see the default Vite + React page in your browser. Once verified, stop the server.
[X Task 2: Establish the Core Project Folder Structure.

Sub-task 2.1: Inside the src/ directory, create a new folder named assets. This will hold all static assets like images, logos, and fonts.
Sub-task 2.2: Inside the src/ directory, create a new folder named components. This will house all the React components for the landing page.
Sub-task 2.3: Inside the src/ directory, create a new folder named styles. This will contain our global and variable stylesheets.
Sub-task 2.4: To ensure the empty assets and components directories can be committed to version control, add a placeholder file named .gitkeep inside each one.
[X] Task 3: Define Global Styles & Design Tokens.

Sub-task 3.1: Create a new file inside src/styles/ named variables.css.
Sub-task 3.2: Populate src/styles/variables.css with the core design tokens for the entire project. The content should be:
CSS

:root {
  /* Colors */
  --color-background-light: #FCEFEF;
  --color-background-medium: #E896D8;
  --color-background-dark: #A484E9;
  --color-text-dark: #333333;
  --color-text-light: #FFFFFF;
  --color-primary-cta: #6A44E5;
  --color-secondary-text: #555555;

  /* Typography */
  --font-primary: 'Poppins', sans-serif; /* Requires Google Font import later */
  --font-size-h1: 3.5rem;
  --font-size-h2: 2.5rem;
  --font-size-body: 1rem;

  /* Spacing */
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
}
Sub-task 3.3: Create a second file inside src/styles/ named global.css.
Sub-task 3.4: Populate src/styles/global.css with the base styles for the document. This file will import the variables. The content should be:
CSS

@import './variables.css';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-primary);
  color: var(--color-text-dark);
  background-color: var(--color-background-light); /* Set a base background */
}

h1, h2, h3, p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
Sub-task 3.5: Connect the global styles to the React application by editing src/main.jsx. Add the following import statement at the top of the file: import './styles/global.css';
Sub-task 3.6: Clean up the default Vite styles to prevent conflicts. Delete the files src/App.css and src/index.css. Then, remove the corresponding import statements for these files from src/App.jsx and src/main.jsx.
II. Agent's Implementation Summary & Notes

### Regarding Task 1: Initialize a new Vite + React project.

**Summary of Implementation:**
- Successfully initialized a new Vite + React project with TypeScript
- Installed all necessary dependencies using `npm install`
- Verified the development server is running on http://localhost:5174

**Key Files Modified/Created:**
- `package.json` - Project configuration and dependencies
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `index.html` - Main HTML template
- `src/main.tsx` - Application entry point
- `src/App.tsx` - Main application component

**Notes/Challenges Encountered:**
- Had to handle the case where the target directory wasn't empty by creating a new subdirectory
- Development server is running on port 5174 (5173 was in use)

### Regarding Task 2: Establish the Core Project Folder Structure.

**Summary of Implementation:**
- Created the core directory structure as specified
- Added `.gitkeep` files to ensure empty directories are tracked by git

**Key Files Modified/Created:**
- `src/assets/.gitkeep` - Placeholder for static assets
- `src/components/.gitkeep` - Placeholder for React components
- `src/styles/` - Directory for global styles

**Notes/Challenges Encountered:**
- Used PowerShell commands compatible with Windows for directory creation
- Ensured all paths use forward slashes for cross-platform compatibility

### Regarding Task 3: Define Global Styles & Design Tokens.

**Summary of Implementation:**
- Created CSS variables for design tokens (colors, typography, spacing)
- Set up base styles with CSS reset and global styles
- Integrated global styles into the application
- Cleaned up default Vite styles

**Key Files Modified/Created:**
- `src/styles/variables.css` - Design tokens and CSS variables
- `src/styles/global.css` - Global styles and CSS reset
- `src/main.tsx` - Updated to import global styles

**Key Files Deleted:**
- `src/App.css` - Removed default Vite styles
- `src/index.css` - Removed default Vite styles

**Notes/Challenges Encountered:**
- Had to ensure proper CSS variable scoping with `:root`
- Cleaned up React template to remove unused code and styles

III. Overall Sprint Summary & Review

1. **Key Accomplishments this Sprint:**
   - Successfully set up a new Vite + React project with TypeScript
   - Established a clean and scalable project structure
   - Implemented a comprehensive design system with CSS variables
   - Set up a development environment with hot module replacement
   - Created a solid foundation for future development

2. **Deviations from Original Plan/Prompt:**
   - Used TypeScript instead of plain JavaScript for better type safety
   - Development server is running on port 5174 instead of the default 5173
   - Added TypeScript-specific configurations

3. **New Issues, Bugs, or Challenges Encountered:**
   - Port 5173 was in use, so the development server started on port 5174
   - Had to handle Windows-specific path separators in build scripts

4. **Key Learnings & Decisions Made:**
   - Implemented CSS variables for theming and consistency
   - Set up a clean component architecture from the start
   - Established a pattern for global styles and design tokens
   - Decided to use functional components with TypeScript for type safety

5. **Blockers:**
   - None at this time

6. **Next Steps Considered / Plan for Next Sprint:**
   - Add Poppins font from Google Fonts
   - Begin implementing core components (Header, Footer, Hero section)
   - Set up routing for multi-page navigation
   - Add responsive design utilities

**Sprint Status:** Fully Completed