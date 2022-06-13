import Left, { SidebarCenter } from "./components/leftSidebar/Left";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div style={{display: "flex"}}>
        <Left/>
        <SidebarCenter/>
      </div>
    </>
    
  );
}

export default App;
