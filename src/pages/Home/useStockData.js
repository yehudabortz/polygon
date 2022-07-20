import { useEffect, useState } from "react";
const stockData = require("../../data.json");

export const useStockData = () => {
  const [stocks, setStocks] = useState(stockData);

  // This effect iterates through our stock data every 2 seconds and increases the prices of even indexed components by 20%.
  // This causes re-renders because the data has changed.
  useEffect(() => {
    const timeout = setTimeout(() => {
      const updatedStocks = [...stocks];
      for (let i = 0; i < updatedStocks.length; i++) {
        const currentStock = updatedStocks[i];
        if (i % 2 === 0) {
          const newPrice = currentStock["o"] + currentStock["o"] ** 0.2;
          const roundedPrice = Math.round(100 * newPrice) / 100;
          currentStock["o"] = roundedPrice;
          updatedStocks[i] = currentStock;
        }
      }
      setStocks(updatedStocks);
    }, "2000");
    return () => clearTimeout(timeout);
  }, [stocks]);

  return stocks;
};
