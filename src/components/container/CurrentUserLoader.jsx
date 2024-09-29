import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function CurrentUserLoader({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");

      setUser(response.data);
    })();
  }, []);
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </div>
  );
}

export default CurrentUserLoader;
