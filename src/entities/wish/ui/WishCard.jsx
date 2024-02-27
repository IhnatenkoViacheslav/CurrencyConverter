/* eslint-disable react/prop-types */
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export const WishCard = ({title, inititalPrice, priceInfo}) => {


    return (
        <Box>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {`Price: ${inititalPrice}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {priceInfo}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}