"use client";

import { mdiEarth } from "@mdi/js";
import Icon from "@mdi/react";
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
        await fetchVisitorCount();
      } catch (error) {
        console.error("Error incrementing visitor count:", error);
      }
    };

    incrementVisitorCount();

    fetchVisitorCount();

    const interval = setInterval(fetchVisitorCount, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center self-center mt-4 text-md font-semibold">
      <div className="flex items-center">
        <Icon path={mdiEarth} size={1.5} />
        <span className="ml-1">{visitorCount}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;
