import React from "react";
import Counter from "./Components/Counter";
import { PrimeReactProvider } from "primereact/api";
import { QueryClientProvider, QueryClient } from "react-query";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <div className="app-container">
          <Counter />
        </div>
      </PrimeReactProvider>
    </QueryClientProvider>
  );
};

export default App;
