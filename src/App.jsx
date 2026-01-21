import { useState, useEffect } from "react";
import Header from "./components/Header";
import CategoryGrid from "./components/CategoryGrid";
import BottomNav from "./components/BottomNav";
import SellProduct from "./components/SellProduct";
import HeroCarousel from "./components/HeroCarousel";
import NewestItems from "./components/NewestItems";
import Auth from "./components/Auth";
import SellerRegister from "./components/SellerRegister";
import OrdersList from "./components/OrdersList"; // Ensure this file exists
import ProfileView from "./components/ProfileView";
import ItemsList from "./components/ItemsList";
 // Ensure this file exists
 // 🔥 Import the new component

function App() {
  const [isSelling, setIsSelling] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 🧭 State to toggle between "home" components and the "items" component
  const [activeTab, setActiveTab] = useState("home"); 

  useEffect(() => {
    const loggedIn = localStorage.getItem("handycart_logged_in") === "true";
    const role = localStorage.getItem("handycart_role");
    if (loggedIn) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) setActiveTab("items"); // Switch to items view when searching
  };

  const handleLoginSuccess = (selectedRole) => {
    setIsLoggedIn(true);
    setUserRole(selectedRole);
    localStorage.setItem("handycart_logged_in", "true");
    localStorage.setItem("handycart_role", selectedRole);
    setShowAuth(false);
    if (selectedRole === "seller") setShowRegister(true);
  };

  const handleSellClick = () => {
    if (isLoggedIn && userRole === "seller") setIsSelling(true);
    else if (!isLoggedIn) setShowAuth(true);
    else alert("Only Artisans can sell products!");
  };
  const handleLogout = () => {
  localStorage.clear();
  window.location.reload(); // Simple way to reset state
};
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <Auth isOpen={showAuth} onClose={() => setShowAuth(false)} onLoginSuccess={handleLoginSuccess} />
      <SellerRegister isOpen={showRegister} onClose={() => setShowRegister(false)} onComplete={() => setShowRegister(false)} />
      <SellProduct isOpen={isSelling} onClose={() => setIsSelling(false)} />

      <div className="w-full bg-[#FDFBF7]">
        <header className="sticky top-0 z-50 bg-[#FDFBF7] border-b">
          <Header onProfileClick={() => setShowAuth(true)} onSearch={handleSearch} />
        </header>

        <main className="w-full max-w-7xl mx-auto flex flex-col">
          {/* 🔄 SWITCHING LOGIC */}
        {activeTab === "home" ? (
  <>
    <HeroCarousel />
    <CategoryGrid searchQuery={searchQuery} />
    <NewestItems searchQuery={searchQuery} />
  </>
) : activeTab === "items" ? (
  <ItemsList searchQuery={searchQuery} />
) : activeTab === "orders" ? (
  <OrdersList userRole={userRole} />
) : (
  <ProfileView userRole={userRole} onLogout={handleLogout} />
)}

          <div className="h-40"></div>
        </main>
      </div>

      <div className="fixed bottom-4 left-0 right-0 z-[999] px-4 flex justify-center pointer-events-none">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl pointer-events-auto">
          <BottomNav 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            onSellClick={handleSellClick} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;