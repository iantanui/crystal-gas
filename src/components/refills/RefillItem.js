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

const RefillItem = ({ refill, onEdit, onDelete }) => {
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
            {refill.id}
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
          <span>Customer Name:</span>
          <span> {refill.customerName}</span>
        </Typography>
        <Typography style={{ marginBottom: "8px" }}>
          <span>Phone Number:</span>
          <span>{refill.phoneNumber}</span>
        </Typography>
        <Typography style={{ marginBottom: "8px" }}>
          <span>Products:</span>
          {refill.selectedProducts.map((product) => (
            <span key={product.id}>
              {product.name} (Size: {product.size}, Quantity: {product.quantity})
            </span>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RefillItem;
