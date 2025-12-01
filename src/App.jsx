import AppRouter from './router/AppRouter';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
export default function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </AppProvider>
  );
}
