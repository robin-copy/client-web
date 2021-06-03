import { MyStocksSection } from "./components/MyStocksSection/MyStocksSection";
import { Stock } from "./components/Stock/Stock";
import { useState } from "react";
import { PortfolioSummary } from "./components/PortfolioSummary/PortfolioSummary";

function App() {
  const [userId, setUserId] = useState("402881e679cf4d3b0179cf4d3ec70000");
  const [stockSymbol, setStockSymbol] = useState(null);

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <MyStocksSection userId={userId} setStockSymbol={setStockSymbol} />
        {stockSymbol ? (
          <Stock
            userId={userId}
            stockSymbol={stockSymbol}
            setStockSymbol={setStockSymbol}
          />
        ) : (
          <PortfolioSummary userId={userId} />
        )}
      </div>
    </div>
  );
}

export default App;
