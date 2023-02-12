import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Anouncements from "./pages/Anouncements";
import ContentDetails from "./pages/courespages/ContentDetails";
import LatePage from "./pages/courespages/materialPages/LatePage";
import MaterialContent from "./pages/courespages/materialPages/MaterialContent";
import Ratings from "./pages/courespages/materialPages/Ratings";
import Students from "./pages/courespages/materialPages/Students";
import SubmittedPage from "./pages/courespages/materialPages/SubmittedPage";
import WaitingPage from "./pages/courespages/materialPages/WaitingPage";
import ContentStudentsPage from "./pages/courespages/studentsPage/ContentStudentsPage";
import Courses from "./pages/Courses";
import Notfoundpage from "./pages/Notfoundpage";
import Notifications from "./pages/Notifications";
import Schedule from "./pages/Schedule";

const App = () => {
  const MATERIALS = [
    {
      title: "Material 1",
      id: 1,
    },
    {
      title: "Material 2",
      id: 2,
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/course/material" />} />
          <Route path="course" element={<Courses />}>
            {/* ////////////////////////studentPage/////////////// */}
            <Route path="students" element={<Students />} />

            <Route
              path="students/:id/details"
              element={<ContentStudentsPage />}
            ></Route>

            {/* ///////////////materialsPage///////////////////////////////////////////////////////////////// */}

            <Route
              path="material"
              element={<MaterialContent MATERIALS={MATERIALS} />}
            ></Route>

            <Route path="material/:id/details" element={<ContentDetails />}>
              <Route path="submitted" element={<SubmittedPage />} />
              <Route path="waiting" element={<WaitingPage />} />
              <Route path="late" element={<LatePage />} />
            </Route>
            {/* ///////////////////////////////////////////////////////////////////////////// */}
            <Route path="ratings" element={<Ratings />} />
          </Route>
          <Route path="anouncements" element={<Anouncements />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
