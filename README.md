1. What is JSX, and why is it used?
JSX stands for JavaScript XML. It allows developers to write HTML-like code inside JavaScript when working with React. JSX makes the UI code easier to read and understand because the structure of the interface looks similar to HTML. React then converts JSX into regular JavaScript so the browser can understand it.

2. What is the difference between State and Props?
State and Props are both used to manage data in React components, but they work differently. State is used to store data inside a component and it can change over time, usually through user interaction or events. Props, on the other hand, are used to pass data from a parent component to a child component. Props are read-only, meaning the child component cannot change them.

3. What is the useState hook, and how does it work?
The useState hook is a React hook that allows functional components to store and manage state. It returns two values: the current state value and a function to update that value. When the state is updated using the update function, React automatically re-renders the component to reflect the new data in the UI.

4. How can you share state between components in React?
State can be shared between components by lifting the state up to their closest common parent component. The parent component stores the state and then passes it down to child components using props. This way, multiple components can access and use the same data.

5. How is event handling done in React?
Event handling in React is done by using event attributes like onClick, onChange, or onSubmit inside JSX. These attributes call a function when the event occurs. For example, when a button is clicked, the onClick attribute can trigger a function that updates state or performs another action. React events work similarly to JavaScript events but follow the React syntax.
