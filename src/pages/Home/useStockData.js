import { useMemo, useEffect, useState } from "react";
const stockData = require("../../data.json");

export const useStockData = () => {
  const [stocks, setStocks] = useState(stockData);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      for (let i = 0; i < stocks.length; i++) {
        const currentStock = stocks[i];
        if (i % 2 === 0) {
          const newPrice = currentStock["o"] + currentStock["o"] ** 0.2;
          const roundedPrice = Math.round(100 * newPrice) / 100;
          currentStock["o"] = roundedPrice;
          stocks[i] = currentStock;
        }
      }
      setRenderCount((prev) => prev + 1);
    }, "2000");
    return () => clearTimeout(timeout);
  }, [stocks, renderCount]);

  return stocks;
};
