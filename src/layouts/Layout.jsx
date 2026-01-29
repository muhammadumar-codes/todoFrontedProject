import {Outlet} from "react-router-dom"
export default function Layout() {
  return (
   <main >

     <Outlet /> {/* Child pages render here */}
     
   </main>
  );
}
