import { Outlet } from 'react-router-dom';
import './App.css';

// TODO: Import and render Header and Footer components once they are migrated.

function App() {
  return (
    <div className="app-container">
      {/* <Header /> */}
      <main className="main-content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
