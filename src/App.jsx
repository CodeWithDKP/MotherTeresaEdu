import AppRouter from "./components/router/AppRouter";
import { AppProvider } from "./components/context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
