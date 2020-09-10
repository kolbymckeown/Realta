import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import ProductRender from './components/ProductsRender'

function App() {
	return (
		<div>
			<Header />
			<Banner />
			<About />
			{/* <ProductRender /> */}

			<Products />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
