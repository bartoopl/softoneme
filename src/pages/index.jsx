import * as React from "react"
import Navbar from '../components/Navbar/navbar'
import { Link } from "gatsby";
import {ContentWrapper} from "../components/ContentWrapper/ContentWrapper.styles";
import styled from "styled-components";
import Arrow from "../assets/icons/arrow.svg";

const SloganSection = styled.section`
  flex: 0 0 auto;
  margin: 50% 0 0;
  p {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    line-height: 0;
  }
`;

const Homepage = ({ data }) => (
		<ContentWrapper>
			<Navbar />
			<SloganSection>
				<p> we change future.</p>
				<p>we change business.</p>
			</SloganSection>
			<Link to="/oferta"><Arrow /></Link>
		</ContentWrapper>
);
export default Homepage
