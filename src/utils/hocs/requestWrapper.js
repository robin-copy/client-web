import React, { useEffect } from "react";

export const requestWrapper = (f) => (Component) => (props) => {
  const request = f(props);

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <Component {...props} />
    </>
  );
};
