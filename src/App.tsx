// src/App.tsx
import Header from "./components/Header";
import Home from "./pages/Home";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => (
  <div>
    <Header />
    <Home />
    <ReactQueryDevtools initialIsOpen={false} />
  </div>
);

export default App;
