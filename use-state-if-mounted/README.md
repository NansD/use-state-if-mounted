# useStateIfMounted
A hook for updating state only if the component is mounted.

## How to use
Use this hook just like React's [useState](https://reactjs.org/docs/hooks-reference.html#usestate).

This one hook only updates state if the component that called this hook is mounted. This allows us to avoid memory leaks and messages like this one :
```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. in Child (created by Holder)
```

## Examples
### Basic usage
```javascript
const [count, setCount] = useStateIfMounted(0);
````

### "Real use case" usage
Based from this [issue](https://github.com/facebook/react/issues/14113) from Github.

```javascript

const apiCall = n =>
new Promise(resolve => setTimeout(() => resolve(n + 1), 3000));

const ShowApiCallResult = () => {
const [n, setN] = useState(0);
useEffect(() => {
  apiCall(n).then(newN => setN(newN));
});

return String(n);
};

const RemoveComponentWithPendingApiCall = () => {
const [show, setShow] = useState(true);
return (
  <React.Fragment>
    <button onClick={() => setShow(false)}>Click me</button>
    {show && <ShowApiCallResult />}
  </React.Fragment>
);
};
```

The issue can be fixed with our hook by simply replacing `useState` with `useStateIfMounted` :



```javascript
const apiCall = n =>
new Promise(resolve => setTimeout(() => resolve(n + 1), 3000));

const ShowApiCallResult = () => {
const [n, setN] = useState(0);
useEffect(() => {
  apiCall(n).then(newN => setN(newN));
});

return String(n);
};

const RemoveComponentWithPendingApiCall = () => {
const [show, setShow] = useStateIfMounted(true); // notice the change 🚀
return (
  <React.Fragment>
    <button onClick={() => setShow(false)}>Click me</button>
    {show && <ShowApiCallResult />}
  </React.Fragment>
);
};
```