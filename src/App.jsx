import Router from "./router/Router";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";

import "./App.css";

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
    </TanstackQueryProvider>
  );
}

export default App;
