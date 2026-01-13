
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../routes/RoutesConfig';
import Card from '../../../components/Card';
import DasboardLayouts from '../../../layouts/DasboardLayouts';
import './Home.css'
import { useEffect, useState } from "react";
import ESGEffectiveness from '../middelPage/ESGEffectiveness';
import ClimateRisk from '../middelPage/ClimateRisk';
import NextLD from '../middelPage/NextLD';
import CopyrightModal from '../../../components/CopyrightModal ';



function Home() {
  const [showCopyright, setShowCopyright] = useState(false);
  useEffect(() => {
  const accepted = localStorage.getItem("copyrightAccepted");
  if (!accepted) {
    setShowCopyright(true);
  }
}, []);
const navigat= useNavigate()

const handleAccept = () => {
  localStorage.setItem("copyrightAccepted", "true");
  setShowCopyright(false);
};

const handleReject = () => {
  // Optional: redirect or logout
  // setShowCopyright(false);
  navigat('/')
};


  const tabs = [
  {
    id: "esg",
    title: "ESG Effectiveness",
    content: <ESGEffectiveness />,
    path: RoutePath.ESG
  },
  {
    id: "climate",
    title: "Climate Risk & Net Zero Management",
    content: <ClimateRisk />,
    path: RoutePath.CLIMATE
  },
  {
    id: "lnd",
    title: "Next - L&D",
    content: <NextLD />,
    path: RoutePath.NEXT
  }
];
  //  const linkClassName = ({ isActive }) =>
  //   `w-full block text-left px-4 py-3 rounded-md mb-2 font-medium
  //    ${isActive ? "bg-gray-100 border border-gray-300" : "bg-white hover:bg-gray-50"}`;
  const [activeTab, setActiveTab] = useState("esg");

  return (
    <>
    <CopyrightModal
    show={showCopyright}
    onAccept={handleAccept}
    onReject={handleReject}
  />
 <DasboardLayouts> 
    <div className="min-h-screen">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 mb-5">
              <div className="tabs-container">
                {/* Desktop Tabs */}
                <div className="tabs-desktop">
                  <div className="tab-list">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}>
                        <NavLink to={tab.path}>
                          {tab.title}
                        </NavLink>
                      </button>
                    ))}
                  </div>

                  <div className="tab-content">
                    {tabs.find(tab => tab.id === activeTab)?.content}
                  </div>
                </div>

                {/* Mobile Accordion */}
                <div className="tabs-mobile">
                  {tabs.map(tab => (
                    <div key={tab.id} className="accordion-item">
                      <button
                        className="accordion-header"
                        onClick={() =>
                          setActiveTab(activeTab === tab.id ? "" : tab.id)
                        }>
                        {tab.title}
                        <span>{activeTab === tab.id ? "▲" : "▼"}</span>
                      </button>

                      {activeTab === tab.id && (
                        <div className="accordion-content">{tab.content}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </DasboardLayouts>
    
    </>
  );
}

export default Home