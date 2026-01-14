import Header from "../components/Header";


export default function AuthLayouts({ children }) {
  return (
    <div className="min-h-screen w-full">

      {/* Header with logo */}
      <Header />

      {/* Center content */}
      <div className="flex items-center justify-center">
        {children}
      </div>

    </div>
  );
}
