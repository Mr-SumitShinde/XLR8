import React from "react";
import AppNavbar from "../components/Navbar";

function Dashboard(userDetails) {
  const user = userDetails.userDetails;
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button Clicked!",user);
  };

  return (
    <div className="App">
      <AppNavbar />
    </div>
  );
}

export default Dashboard;
