# Pomodoro-project

This project is designed to test my ability to work with rendering and state management using React.
Before taking on this project, you should be comfortable with the learning objectives listed below:

    Installing packages via NPM
    Running tests from the command line
    Writing React function components
    Using hooks like useState()
    Debugging React code through console output

For this project, make sure that:
-All props are treated as read-only.
-Audio plays when the focus timer expires.
-Audio plays when the break timer expires.
-All state is updated using callbacks to avoid race conditions. Allowable exceptions are cases where the next state is not
determined by the current state. For example, when disabling the timer, it is okay to just call setIsTimerRunning(false).
-There are at least three components.
-Each component has a single responsibility.
-The main Pomodoro is free of any conditional display logic. This means that there aren't any if statements in the render function;
each component determines its own visibility.

Componenets that I used in the program:

    -Use of any non-pure functions that can be changed into pure functions.
    -Use of any variable or function names that can be improved (such as highly abbreviated names).
    -Use of if statement to bound lower and upper limits of the focus or break duration. 
    This is because using Math.min() and Math.max() appropriately eliminates the need for if statements with numeric boundaries.
    -Use of if statements in the returned JSX. Although there is nothing wrong with using conditional statements embedded in JSX,
    avoiding them generally makes the code easier to understand and maintain.
    -Use of components with multiple responsibilities or multiple reasons to re-render. For example, if the time format or the
    upper bound for the focus duration change, consider how many components would need to re-render.
    -Lots of conditional logic embedded in the useInterval() hook. Most logic should be broken out into small,
    single-responsibility pure functions that mutate the state as necessary.
    
    
