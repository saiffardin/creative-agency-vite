// import FullLandingPage from "@components/LandingPage/FullLandingPage/FullLandingPage";

import FullLandingPage from "@components/LandingPage/FullLandingPage/FullLandingPage";

function App() {
  console.log("VITE_SOME_KEY:", import.meta.env.VITE_ENV_FILE);

  return <FullLandingPage />;
}

export default App;
