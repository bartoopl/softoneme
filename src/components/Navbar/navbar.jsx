import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav `
	margin-left: 10px;
  	font-family: 'Poppins',sans-serif ;
`;

export default function Navbar() {
	return (
		<Nav>
			<h1>softone.me</h1>
		</Nav>
	)
}
