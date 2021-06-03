import { MyStocksSection } from "./components/MyStocksSection/MyStocksSection";
import { Stock } from "./components/Stock/Stock";

function App() {
  return (
    <div>
      <div>
        <MyStocksSection />
        <Stock />
      </div>
    </div>
  );
}

export default App;
