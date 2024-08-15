"use client";

import { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // const url = `${process.env.NEXT_PUBLIC_API_LOCAL}/api`;
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`;

    const fetchVisitorCount = async () => {
      try {
        console.log("Fetching visitor count...");
        const response = await fetch(`${url}/visitors`);
        if (!response.ok) {
          throw new Error("Failed to fetch visitor count");
        }
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    const incrementVisitorCount = async () => {
      try {
        console.log("Incrementing visitor count...");
        const response = await fetch(`${url}/visitors/increment`, {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error("Failed to increment visitor count");
        }
        // Fetch the updated visitor count after incrementing
        await fetchVisitorCount();
      } catch (error) {
        console.error("Error incrementing visitor count:", error);
      }
    };

    // Increment visitor count and then fetch it
    incrementVisitorCount();

    // Fetch the visitor count initially
    fetchVisitorCount();

    // Set up an interval to periodically fetch visitor count
    const interval = setInterval(fetchVisitorCount, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-4 text-md font-semibold">
      <p>Visitors {visitorCount}</p>
    </div>
  );
};

export default VisitorCounter;
