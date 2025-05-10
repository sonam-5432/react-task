import React, { useState } from 'react';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import Tab5 from './components/Tab5';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab(1)}>Tab 1</button>
        <button onClick={() => setActiveTab(2)}>Tab 2</button>
        <button onClick={() => setActiveTab(3)}>Tab 3</button>
        <button onClick={() => setActiveTab(4)}>Tab 4</button>
        <button onClick={() => setActiveTab(5)}>Tab 5</button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 setActiveTab={setActiveTab} />}
        {activeTab === 3 && <Tab3 />}
        {activeTab === 4 && <Tab4 />}
        {activeTab === 5 && <Tab5 />}
      </div>
    </div>
  );
};

export default App;
