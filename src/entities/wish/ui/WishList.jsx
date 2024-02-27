/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { convertCurrency } from "../../../shared/utils";
import { WishCard } from "./WishCard";

export const WishList = ({ currencyRate, items }) => {
  return (
    <Box 
      display="flex"
      justifyContent="center"
      gap={2}
      flexWrap="wrap"
    >
      {items &&
        items.map((item, i) => {
          const result = convertCurrency(
            item.countCurrency,
            currencyRate[item.from],
            currencyRate[item.to]
          );

          return (
            <WishCard
              key={`${i}-${item.from}-${item.countCurrency}`}
              title={item.wishName}
              inititalPrice={`${item.countCurrency} ${item.from}`}
              priceInfo={`${item.countCurrency} ${item.from} = ${result.toFixed(
                3
              )} ${item.to}`}
            />
          );
        })}
    </Box>
  );
};
