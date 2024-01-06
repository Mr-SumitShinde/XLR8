import React from "react";
import AppNavbar from "../components/Navbar";
function Dashboard(userDetails) {
  const user = userDetails.userDetails;
  return (
    <div className="App">
      <AppNavbar />
      <h1>{user.name}</h1>
    </div>
  );
}

export default Dashboard;
