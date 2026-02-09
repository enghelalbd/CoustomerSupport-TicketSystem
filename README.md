# What is JSX, and why is it used?

JSX is a JavaScript syntax extension used in React to write HTML-like code, making structure clearer and easier to maintain

# What is the difference between State and Props?

State: Internal data of a component that can change over time and controls its behavior or UI.

Props: External data passed from parent to child component; generally read-only and not modified by the child.

# What is the useState hook, and how does it work?

useState is a React Hook used to add and manage state in functional components.
It returns a state variable and a function to update it, causing the component to re-render when the state changes.

# How can you share state between components in React?

Lifting state up: Move state to a common parent and pass it via props.

Context API: Share state globally without prop drilling.

# How is event handling done in React?

Event handling in React is done using camelCase event names and passing a function as the event handler
