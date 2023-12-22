// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p className="">Sorry, an unexpected error has occurred.</p>
      {/* <p className="">
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
