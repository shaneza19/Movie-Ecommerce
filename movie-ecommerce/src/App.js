import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar";
import MovieList from "./Pages/MovieList";
import PopularMovieList from "./Pages/PopularMovieList";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  // Load shopping cart from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to local storage whenever cart change
  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Remove a movie from cart by ID
  const removeFromCart = (movieToRemove) => {
    const updatedCart = cart.filter((movie) => movie.id !== movieToRemove.id);
    setCart(updatedCart);
  };

  // Clear all movies from cart
  const clearCart = () => {
    localStorage.setItem("cart", [JSON.stringify([])]);
    window.location.reload();
  };

  /*function to check if a movie already exists in the shopping cart: 
  (This function returns -1 if it is unique, 
  and else, returns the index of found duplicate item*/
  const cartItemCheckDuplicate = (movie, cart) => {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id == movie.id) return i;
    }
    return -1;
  };

  // Add a movie to cart
  const addToCart = (movie) => {
    var itemDupIndex = cartItemCheckDuplicate(movie, cart);
    if (itemDupIndex != -1) {
      // which means it is duplicate
      console.log("movie already exists in the cart");
      return;
    } // it is unique
    else {
      setCart([...cart, movie]);
      console.log(cart);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie E-commerce</h1>
      </header>
      <Navbar />
      <main>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<MovieList addToCart={addToCart} />}
            />
            <Route
              path="/popular"
              element={<PopularMovieList addToCart={addToCart} />}
            />
            <Route
              path="/shopping"
              element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
            />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
