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

const RefillItem = ({ index, refill, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderProductList = () => {
    if (refill.selectedProducts.length === 0) {
      return <Typography>No products selected</Typography>;
    }

    return refill.selectedProducts.map((product, index) => (
      <React.Fragment key={product.id}>
        <Typography variant="body1">
          <span style={{ fontWeight: "bold" }}>{product.name}</span> -{" "}
          {product.size}, {product.quantity}
          {index < refill.selectedProducts.length - 1 && ","}
        </Typography>
      </React.Fragment>
    ));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    refill.selectedProducts.forEach((product) => {
      totalPrice += product.sellingPrice * product.quantity;
    });
    return totalPrice;
  };

   
   const formatISODate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
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
          {" "}
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
            {index + 1}
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
        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Customer Name:</span>
          <span> {refill.customerName}</span>
        </Typography>
        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Phone Number:</span>
          <span>{refill.phoneNumber}</span>
        </Typography>

        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span> Products: </span>
          <span>{renderProductList()}</span>
        </Typography>

        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Total Price:</span>
          <span> KES {calculateTotalPrice()}</span>
        </Typography>

        <Typography
          style={{
            padding: "8px",
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <span>Date</span>
          <span>{formatISODate(refill.timestamp)}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RefillItem;
