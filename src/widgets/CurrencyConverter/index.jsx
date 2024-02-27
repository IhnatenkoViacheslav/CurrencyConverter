import { CircularProgress, Typography, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { ConvertForm } from "../../features";
import { currencyService } from "../../shared/api";
import { useState } from "react";
import { convertCurrency } from "../../shared/utils";
import { mapCurrencyRatesToLabelValue } from "../../entities/currency/lib/mapper";


export const CurrencyConverter = () => {
    const [converterResult, setConverterResult] = useState(null)

    const {isLoading, data: currencyRate} = useQuery({ queryKey: ["currencyRate"], queryFn: currencyService.getCurrency, select: (data) => data.data})

    const onSubmit = (data) => {
        const result = convertCurrency(data.countCurrency, currencyRate[data.from], currencyRate[data.to]);

        return setConverterResult(`${data.countCurrency} ${data.from} = ${result.toFixed(3)} ${data.to}`)
    }

    if (isLoading) {
        return (
            <CircularProgress/>
        )
    }

    return (
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Typography variant="h4">Currency converter</Typography>

            <Box 
                sx={{ 
                    padding: 2,
                    backgroundColor: '#d2dae2',
                }}
            >
                <ConvertForm 
                    currencyList={mapCurrencyRatesToLabelValue(currencyRate)}
                    onSubmit={onSubmit}
                    buttonLabel="Convert"
                    inputLabel="Amount"
                />
            </Box>

            <Box sx={{padding: 2, minHeight: '64px'}}>
                {converterResult && <Typography variant="h4">{converterResult}</Typography>}
            </Box>
        </Box> 
    )
}