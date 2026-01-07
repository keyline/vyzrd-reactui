import Header from "../components/Header";


export default function AuthLayouts({ children }) {
  return (
    <div className="min-h-screen w-full">

      {/* Header with logo */}
      <Header />

      {/* Center content */}
      <div className="min-h-screen flex items-center justify-center pt-20">
        {children}
      </div>

    </div>
  );
}
