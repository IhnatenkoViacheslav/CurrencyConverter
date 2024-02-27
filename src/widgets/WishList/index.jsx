import { useCallback, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material"

import { ModalBase } from "../../shared/ui"
import { currencyService } from "../../shared/api"
import { useInputState } from "../../shared/utils"
import { ConvertForm } from "../../features"
import { mapCurrencyRatesToLabelValue } from "../../entities/currency/lib/mapper"
import { WishList, useWishListState } from '../../entities/wish'

export const WishListWidget = () => {
    const [open, setOpen] = useState(false);

    const {value, setValue, error, setError} = useInputState();
    const { wishList, saveItem} = useWishListState();

    const { isLoading, data: currencyRate} = useQuery({ queryKey: ["currencyRate"], queryFn: currencyService.getCurrency, select: (data) => data.data})

    
    const onSubmit = useCallback((data) => {
        if (!value) {
            return setError(true)
        }

        saveItem({
            ...data,
            wishName: value
        })
        return setOpen(false);
    },[saveItem, setError, value])

    const onAddWishClick = () => {
        setOpen(true);
    }

    const onValueChange = (e) => {
        const targetValue = e.target.value

        if(targetValue) {
            setError(false)
        }
        
        return setValue(e.target.value)
    }

    if(isLoading) {
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
            <Typography variant="h4">Wish List</Typography>
            <Button 
                variant='outlined' 
                color ='primary'
                onClick={onAddWishClick}
            >
                Add wish
            </Button>
            <Box 
                padding="16px"
            >
                <WishList
                    currencyRate={currencyRate}
                    items={wishList}
                />
            </Box>
            
            <ModalBase
                title='Describe your wish'
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box 
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    padding={2}
                    gap={2}
                >
                    <TextField
                        label="Wish name"
                        type="text"
                        value={value}
                        autoComplete="off"
                        onChange={onValueChange}
                        sx={{width: '100%'}}
                        error={error}
                        helperText={error ? 'Required field' : ''}
                    />

                    <ConvertForm 
                        onSubmit={onSubmit}
                        currencyList={mapCurrencyRatesToLabelValue(currencyRate)}
                        buttonLabel="Save"
                        inputLabel="Price"
                    />
                </Box>
            </ModalBase>
        </Box>
    )
}