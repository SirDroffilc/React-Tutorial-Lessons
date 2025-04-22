# React Tutorial

These repository contains the React components I wrote while studying React on ["React Full Course for free ⚛️ (2024)"](https://www.youtube.com/watch?v=CgkZ7MvWUAA) by Bro Code. I modified some of these components relative to the course's exact code. 

## Sample Components
These are some of the interesting components in this repository:

### 1. Color Picker 
- A React component that lets users pick a color and see the result immediately. 
- This component uses the `onChange` attribute of the `input` HTML tag. 
- This component uses `useState()` React hook for the color. 

### 2. Counter
- A React component that lets users control the counter in three ways: increment, decrement, and reset. 
- This component uses the `onClick` attribute of the `button` HTML tag. 
- This component uses the `useState()` React hook for the count.

### 3. Digital Clock
- A React component that displays a real-time digital clock. 
- This component uses the `useState()` React hook for the time
- This component uses the `useEffect()` React hook for the interval of 1000ms which updates the digital clock every second.

### 4. To-Do List
- A React component that lets users interact with a simple to-do list. 
- This component uses the `onChange` attribute of the `input` HTML tag and the `onClick` attribute of the `button` HTML tag
- This component uses the `useState()` React hook for the to-do and completed task lists. 

### 5. Stopwatch
- A React component that lets users interact with a stopwatch in 3 ways: start, stop, and reset. 
- This component uses the `onClick` attribute of the button HTML tag. 
- This component uses the `useState()` React hook for the `elapsedTime` and the `isRunning` variables
- This component uses the `useRef()` React hook for the interval which runs every 10 milliseconds and the reference for the starting time. 
- This component uses the `useEffect()` React hook which listens to the `isRunning` stateful variable. If `isRunning` is true, the `useEffect()` updates the `elapsedTime` on an interval of 10 milliseconds, else, `useEffect()` does nothing which means `elapsedTime` does not get updated and the stopwatch stops. 


