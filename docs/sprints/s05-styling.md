The goal is to make bold changes. You will be primarily working in your CSS files. Don't be afraid to remove existing styles (like shadows and borders) that don't fit the new aesthetic. Reference the "Great Design Book" image as your guide.

[ ] Task 1: Overhaul Global Design Tokens

[ ] Sub-task 1.1: Open your global variables file (likely src/styles/variables.css or similar).
[ ] Sub-task 1.2 (New Color Palette): Replace the existing color variables with the new, vibrant palette. Use the "Great Design Book" image as a reference.
CSS

/* Example new color palette */
:root {
  /* Primary & Accents */
  --color-primary-cta: #6A44E5; /* The vibrant purple/blue for buttons */
  --color-primary-cta-hover: #5838c4;

  /* Backgrounds - The most important change */
  --color-background-hero: linear-gradient(135deg, #FBECEC 0%, #F5D5E7 100%); /* Hero Gradient */
  --color-background-medium: #E896D8; /* Main pink section background */
  --color-background-dark: #A484E9; /* Purple section background */
  --color-background-light: #FFFFFF; /* Keep white for cards if needed */

  /* Text */
  --color-text-dark: #333333;
  --color-text-light: #FFFFFF;
  --color-secondary-text: #555555;
  /* ... add other variables as needed ... */
}
[ ] Sub-task 1.3 (New Typography): The target design uses a modern, clean sans-serif font. Let's use "Poppins" from Google Fonts.
Go to your main index.html file and add the Google Fonts import in the <head> section: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap">
In your variables.css, update the font-family: --font-primary: 'Poppins', sans-serif;
[ ] Task 2: Redesign and Restyle the Hero Component

[ ] Sub-task 2.1: Open the CSS module for your Hero component.
[ ] Sub-task 2.2: Set the section's background to the new gradient: background: var(--color-background-hero);
[ ] Sub-task 2.3: The target design has the graphic on the left and text on the right. Modify your Hero.jsx layout to match this (e.g., change the order of the columns in your grid/flexbox setup).
[ ] Sub-task 2.4: Replace the current empty white box with a placeholder for a new, stylized graphic. For now, this can be a simple div where an illustration or product mockup will eventually go.
Remove the background and box-shadow from this container. It should just hold an image.
[ ] Sub-task 2.5: Update the text styles. The h1 and <p> tags should now use color: var(--color-text-dark); to be readable against the new light gradient background. Increase the font-weight of the h1 to be more impactful, like in the example.
[ ] Sub-task 2.6: Restyle the form. The input should have a simple border and the button should use background-color: var(--color-primary-cta); and color: var(--color-text-light); to match the target's "GET THE BOOK" button.
[ ] Task 3: Restyle the Header Component

[ ] Sub-task 3.1: Open the CSS file for your Header component.
[ ] Sub-task 3.2: By default, the header should blend with the Hero section. Remove the background-color and box-shadow from the main .header class. The background should be transparent.
[ ] Sub-task 3.3: The header.scrolled class can retain a white background and shadow, so it's visible when scrolling past the Hero section.
[ ] Sub-task 3.4: Ensure the .logo and .signupButton are using the new --color-primary-cta variable.
[ ] Task 4: Restyle the CorePrinciples Section

[ ] Sub-task 4.1: Open the CSS file for your CorePrinciples component.
[ ] Sub-task 4.2: Change the section's background to the vibrant pink: background-color: var(--color-background-medium);
[ ] Sub-task 4.3: The section title and card text now need to be light to be readable. Update the .sectionTitle and .principleDescription to use color: var(--color-text-light);. The .principleTitle can also be light or a slightly different shade.
[ ] Sub-task 4.4: The cards (.principleCard) will look out of place with their current styling.
Remove the border and box-shadow.
Change their background to be transparent (background: transparent;) or a very subtle, slightly darker shade of the pink background to create contrast. The goal is for them to feel part of the section, not boxes sitting on top of it.
The target design features logos in this area. Your CorePrinciples section can be adapted to be more like the "Featured On" section, or you can apply this new styling to your Features component instead. Focus on making one section match the new "dark background with light text" theme.
II. Agent's Implementation Summary & Notes
Instructions for AI Agent (Cascade): For each planned task you complete from Section I, please provide a summary below. If multiple tasks are done in one go, you can summarize them together but reference the task numbers.

(Agent will fill this section out as work is completed)

III. Overall Sprint Summary & Review (To be filled out by Antonio after work is done)
(This section to be filled out upon sprint completion)