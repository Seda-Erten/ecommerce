// components/CartDrawer.js
import {
  Drawer,
  IconButton,
  Divider,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  calculateBasket,
  setDrawer,
} from "../redux/slices/basketSlice";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );

  return (
    <Drawer
      className="drawer"
      sx={{
        "& .MuiDrawer-paper": { backgroundColor: "#F5F5DC", padding: "40px" },
      }}
      onClose={() => dispatch(setDrawer())}
      anchor="right"
      open={drawer}
    >
      <Box sx={{ width: 650, padding: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: "#2E8B57" }}>
          Your Shopping Cart
        </Typography>
        <Divider sx={{ mb: 2, borderColor: "#2E8B57" }} />

        {products.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          products.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                backgroundColor: "#2E8B57",
                borderRadius: 2,
                padding: 1,
                color: "#fff",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                width={60}
                height={60}
                style={{ borderRadius: 4, marginRight: 10 }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" noWrap sx={{ color: "#fff" }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#dcdcdc" }}>
                  Quantity: {product.count}
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: "bold", marginRight: 1 }}>
                {product.price} TL
              </Typography>
              <IconButton
                onClick={() => {
                  dispatch(removeFromBasket(product.id));
                  dispatch(calculateBasket());
                }}
                sx={{ color: "#fff" }}
              >
                <Delete />
              </IconButton>
            </Box>
          ))
        )}

        {products.length > 0 && (
          <>
            <Divider sx={{ my: 2, borderColor: "#2E8B57" }} />
            <Typography
              variant="h6"
              sx={{ textAlign: "center", mb: 2, color: "#2E8B57" }}
            >
              Total: {totalAmount} TL
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mb: 1,
                backgroundColor: "#2E8B57",
                color: "#fff",
                "&:hover": { backgroundColor: "#276b48" },
              }}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={() => {
                products.forEach((p) => dispatch(removeFromBasket(p.id)));
                dispatch(calculateBasket());
              }}
            >
              Clear Cart
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
