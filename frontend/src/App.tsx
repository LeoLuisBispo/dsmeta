import { useState } from "react";
import NotificationButton from "./components/notificationButton";
import Header from "./components/header";
import SalesCard from "./components/salesCard";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
