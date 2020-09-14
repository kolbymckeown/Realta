import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import ProductRender from "./components/ProductsRender";
import { useWindowSize } from '../src/components/helpers/Window'


function App() {
	const { isMobile } = useWindowSize()
	if (isMobile) {
		return (
			<div>
			<Header />
			<Banner />
			<About />
			<Products />
			<Contact />
			</div>
		)
	}
	return (
		<div>
			<Header />
			<Banner />
			<About />
			<Products />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
