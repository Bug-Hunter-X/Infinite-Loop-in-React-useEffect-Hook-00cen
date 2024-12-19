```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the initial render
    // because an empty dependency array is provided.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```