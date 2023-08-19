function ErrorPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-primary">
      <div className="text-secondary border-4 font-semibold flex flex-col justify-center items-center border-secondary -rotate-30 w-40 h-20">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}

export default ErrorPage;
