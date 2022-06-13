import React from "react";
import Navbar from './Navbar/navbar'
import '../assets/styles/global.css'

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">
				{ children }
			</div>
			<footer>
				<p>Copyright 2022 softone.me</p>
			</footer>
		</div>
	)
}
