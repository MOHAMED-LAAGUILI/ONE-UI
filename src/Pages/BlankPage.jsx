
import { useEffect } from 'react';
import SharpCard from '../Components/BodyCard';
import { Bell, Settings } from "lucide-react"; // Example icons

export default function BlankPage() {
  useEffect(() => {
       
  }, []);

  return(
  <>
<SharpCard 
        title="Notifications" 
        Icon={Bell} 
        actionButton={<button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">View</button>}
      >
                  <p>You have 5 new notifications.</p>

      </SharpCard>

      {/* Card Without Action Button */}
      <SharpCard title="Settings" Icon={Settings}>
       
      <p>You have 5 new notifications.</p>



      </SharpCard>
  </>
  );
}
