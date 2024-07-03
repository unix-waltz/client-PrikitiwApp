import Sidebar from "./Sidebar";

const AuthLayout = ({children}) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6">
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;
