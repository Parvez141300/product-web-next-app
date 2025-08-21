import Link from "next/link";
import React from "react";
import Button from "./components/Button/Button";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">404 Not Found</h1>
        <Link
          href={"/"}
        >
          <Button className={'btn-secondary rounded-lg'}>Go Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
