import * as React from "react"
import Navbar from '../components/Navbar/navbar'
import {ContentWrapper} from "../components/ContentWrapper/ContentWrapper.styles";
import styled from "styled-components";
import { graphql } from "gatsby";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
`;

const Welcome = styled.section`
`;

const Thumbnail = styled.section`
`;

const Oferta = () => (
	<ContentWrapper isSubpage>
		<Navbar />
		<Welcome>
			<p>
				Tworzymy strony, które chcą czytać i które realizują Twoje
				cele. Tworzymy sklepy internetowe, które sprzedają i które
				Twoi Klienci pokochają. Reklamujemy tak aby Twój biznes
				nie był martwy. Doradzamy. Siedzimy w tym od 10 lat.
			</p>
		</Welcome>
		<Gallery>
			{/*<Thumbnail imageSource={data.thumbnail.publicURL}/>*/}
			{/*<Thumbnail imageSource={data.thumbnail.publicURL}/>*/}
			{/*<Thumbnail imageSource={data.thumbnail.publicURL}/>*/}
			{/*<Thumbnail imageSource={data.thumbnail.publicURL}/>*/}
			{/*<Thumbnail imageSource={data.thumbnail.publicURL}/>*/}
		</Gallery>
	</ContentWrapper>
);

export default Oferta
