import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      
      <main>
        <Outlet /> {/* This is REQUIRED for nested routes */}
      </main>
      
    </div>
  );
}
