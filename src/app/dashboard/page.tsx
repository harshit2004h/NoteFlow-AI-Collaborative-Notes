import { ArrowLeftCircle } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <main className="flex space-x-2 items-center animate-pulse">
      <ArrowLeftCircle className="w-12 h-12" />
      <h1 className="font-bold">Get Started with creating a New Document</h1>
    </main>
  );
};

export default Dashboard;
