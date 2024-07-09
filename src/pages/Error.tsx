import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <p className="text-[32px]">we're sorry</p>
      <p className="text-[40px]">
        {isRouteErrorResponse(error)
          ? "Error 404. This page doesn't exist"
          : "Unexpected error occured"}
      </p>
    </>
  );
};

export default Error;
