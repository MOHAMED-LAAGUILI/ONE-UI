import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function BlankPage2() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main Content */}
    
    </div>
  );
}