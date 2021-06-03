import { MyStocksSection } from "./components/MyStocksSection/MyStocksSection";
import { Stock } from "./components/Stock/Stock";
import { useEffect, useState } from "react";
import { PortfolioSummary } from "./components/PortfolioSummary/PortfolioSummary";
import axios from "axios";

const portfolioSummary = {
  balance: 3117.0,
  increasePercentage: 1.2012987012986969,
  stocksInfo: [
    {
      stockSymbol: "TSLA",
      quantity: 5,
      lastPrice: 124.28,
      dailyVariationPercentage: -0.26552944962986663,
      dailyVariation: -0.32999999999999824,
      totalVariation: 3.4438364982298046,
      totalWining: 20.66301898937883,
    },
    {
      stockSymbol: "AAPL",
      quantity: 4,
      lastPrice: 623.9,
      dailyVariationPercentage: -0.21157236736657317,
      dailyVariation: -1.32000000000005,
      totalVariation: 0.6251001763103026,
      totalWining: 15.502484372495504,
    },
  ],
};

function App() {
  //402880a079cfb78f0179cfb794320000
  const [userId, setUserId] = useState(null);
  const [stockSymbol, setStockSymbol] = useState(null);

  useEffect(() => {
    const f = async () => {
      try {
        const { data } = await axios.get(`users/defaultUser`);
        setUserId(data);
      } catch (e) {}
    };
    f();
  }, []);

  if (userId == null) return <h1>No user</h1>;

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
          <PortfolioSummary portfolioSummary={portfolioSummary} />
        )}
      </div>
    </div>
  );
}

export default App;
