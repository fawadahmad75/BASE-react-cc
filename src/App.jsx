import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from "./pages/AddJobPage";



const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <MainLayout/> }>
    <Route index element={ <HomePage/> } />
    <Route path="/jobs" element={ <JobsPage/> }/>
    <Route path="*" element={ <NotFoundPage/> }/>
    <Route path="/job/:id" element={ <JobPage/> } loader = {jobLoader}/>
    <Route path="/add-job" element={ <AddJobPage addJobSubmit={addJob}/> }/>
    </Route>
  )
  );

  return <RouterProvider router={router} />;
};

export default App;
