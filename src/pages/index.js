import * as React from "react"
import {ContentWrapper} from "../components/ContentWrapper/ContentWrapper.styles";
import styled from "styled-components";

const LogoSection = styled.div`
  flex: 0 0 auto;
  margin: 10px;
`;

const SloganSection = styled.div`
  flex: 0 0 auto;
  margin: 10px;
`;

const Homepage = ({ data }) => (
	<>
		<ContentWrapper>
			<LogoSection>
				<h1>softone.me</h1>
			</LogoSection>
			<SloganSection>
				<p> we change future.</p>
				<p>we change business.</p>
			</SloganSection>
		</ContentWrapper>
	</>
);
export default Homepage
