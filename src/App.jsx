import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
  AuthWrapper,
  PrivateRoute,
} from "./pages";

export default function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<SingleProductPage />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}
