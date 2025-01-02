# Etch-a-Sketch

Live preview link: [https://khaitan6.github.io/Etch-a-sketch/](https://khaitan6.github.io/Etch-a-sketch/)

## Description

This project is a simple web-based sketchpad inspired by the classic Etch-A-Sketch toy. It allows users to draw on a grid by clicking and dragging the mouse over the squares. Users can resize the grid, reset it while maintaining the current grid size, and interact with additional features for a more dynamic experience.

## Features

- Default 16x16 grid of square divs.
- Ability to resize the grid to any user-defined size between 1x1 and 100x100.
- Progressive darkening effect: Each interaction with a square darkens it by 10%, achieving full black in 10 interactions.
- Randomized square colors on interaction for a vibrant drawing experience.
- Right-click to undo (reset) a square's color to its initial state.
- Responsive design ensures the grid adjusts to the window size.
- Reset button to clear the grid while maintaining the current grid size.

## How to Use

1. **Drawing:** Press and hold the left mouse button to draw on the grid. Squares will progressively darken with each interaction.
2. **Undo:** Right-click on a square to reset its color to fully transparent.
3. **Resize the Grid:** Click the "Resize" button and enter a number between 1 and 100 to create a new grid with the specified dimensions.
4. **Reset the Grid:** Click the "Reset" button to clear the grid while maintaining the current grid size.

## Technologies Used

- **HTML:** Structure of the webpage.
- **CSS:** Styling of the grid and layout.
- **JavaScript:** Logic for grid creation, user interaction, and dynamic updates.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khaitan6/Etch-a-sketch.git
