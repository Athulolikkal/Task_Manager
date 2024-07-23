import { Box, Card, Typography } from "@mui/material";
import ItemBox from "./item_box";

interface Props {
  title: string;
}

const ItemContainer: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Card sx={{ padding: "1rem", margin: "1rem", width: "100%" }}>
        <Box sx={{ backgroundColor: "#4f9af0", padding: "8px",marginBottom:'1rem'}}>
          <Typography sx={{ color: "white",fontWeight:'bold' }}>{title}</Typography>
        </Box>
        <ItemBox />
        <ItemBox />
      </Card>
    </>
  );
};

export default ItemContainer;
