function App() {
  console.log("VITE_SOME_KEY:", import.meta.env.VITE_ENV_FILE);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
