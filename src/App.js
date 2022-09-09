import { Route, Routes } from "react-router-dom";
import NavBar from "./Layouts/NavBar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { dashboardRoutes, publicRoutes } from "./Routes/publicRoutes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="relative" >
      <NavBar />




      <Routes>
        <Route element={<Dashboard />}>


          {
            dashboardRoutes.map(({ path, Component }, idx) => <Route key={idx} path={path} element={<Component />} />)
          }

          {/* <Route path='/home' element={<DashboardHome />} /> */}



        </Route>



      </Routes>



      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


    </div>
  );
}

export default App;
