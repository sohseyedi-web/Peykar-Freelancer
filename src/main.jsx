import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ResponsiveProvider } from "./context/ResponsiveContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ResponsiveProvider>
        <App />
        <Toaster />
      </ResponsiveProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
