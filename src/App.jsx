import { useEffect } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { useDispatch } from "react-redux";
import { calculateBasket } from "./redux/slices/basketSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [dispatch]);

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Footer />
      <Loading />
      <CartDrawer />
    </PageContainer>
  );
}

export default App;
