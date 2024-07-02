import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const ProductItem = ({ product, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      variant="outlined"
      style={{
        marginBottom: "10px",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              padding: "1px 5px",
              borderRadius: "50%",
              border: "1px solid gray",
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
            }}
          >
            {product.id}
          </Typography>
          <IconButton onClick={handleMenuOpen}>
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={onEdit}>Edit</MenuItem>
            <MenuItem onClick={onDelete}>Delete</MenuItem>
          </Menu>
        </div>
        <Divider style={{ width: "95%", alignSelf: "center" }} />
        <Typography style={{ marginBottom: "8px" }}>
          <span>Name:</span>
          <span> {product.name}</span>
        </Typography>
        <Typography style={{ marginBottom: "8px" }}>
          <span>Size:</span>
          <span>{product.size}</span>
        </Typography>
        <Typography style={{ marginBottom: "8px" }}>
          <span>Price:</span>
          <span>{product.price}</span>
        </Typography>
        <Typography>
          <span>Quantity:</span>
          <span>{product.quantity}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
