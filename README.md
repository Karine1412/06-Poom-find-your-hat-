# JavaScript Assessment: Find Your Hat

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JS/TS Assessment (Find Your Hat) Total: 100 points](#jsts-assessment-find-your-hat-total-100-points)
    - [1. Workflow Planning (10 points)](#1-workflow-planning-10-points)
    - [2.1. Board Functions (Hardcoded) (10 points)](#21-board-functions-hardcoded-10-points)
    - [2.2. Board Functions (Generated) (20 points)](#22-board-functions-generated-20-points)
    - [3. Input Functions (10 points)](#3-input-functions-10-points)
    - [4. Movement Functions (10 points)](#4-movement-functions-10-points)
    - [5. Game Rule Functions (20 points)](#5-game-rule-functions-20-points)
    - [6. Game Play Loop (20 points)](#6-game-play-loop-20-points)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project: (for TypeScript execute code with `npm run dev:ts`)

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** in [`thinking-process.md`](./thinkimg-process.md)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Give your game a `.printBoard()` method that prints the current state of the game.
- Board consists of a grid containing “holes” (O) and one “hat” (^).
- We use `EMPTY` a neutral background character (░) to indicate the rest of the walkable grid itself.

  ```js
  // Output:

  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

[🔝 Back to Table of Contents](#table-of-contents)

---

## JS/TS Assessment (Find Your Hat) Total: 100 points

### 1. Workflow Planning (10 points)

Draw a flowchart or write steps describing:

[Game start → Read input → Update position → Check rules → End/Continue]

Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

### 2.1. Board Functions (Hardcoded) (10 points)

Prints the hardcoded board in terminal.

Thinking process should explain:

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

### 2.2. Board Functions (Generated) (20 points)

Creates a random board with player, hat, and holes.
Prints the board in terminal.

Thinking process should explain:

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

### 3. Input Functions (10 points)

Reads and validates user input (w, a, s, d).
Logs invalid input.

Thinking process should explain:

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

### 4. Movement Functions (10 points)

Updates playerRow / playerCol based on the move.

Thinking process should explain:

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

### 5. Game Rule Functions (20 points)

Checks for out-of-bounds, falling into a hole, or finding the hat.
Game Rules:

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

Thinking process should explain:

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

### 6. Game Play Loop (20 points)

Combine all functions into a playable loop.
Ensure messages appear correctly, board prints at start, and invalid input is handled.

Thinking process should explain:

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

[🔝 Back to Table of Contents](#table-of-contents)


