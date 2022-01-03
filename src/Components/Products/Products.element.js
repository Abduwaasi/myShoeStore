import styled from "styled-components";
export const ProductContainer = styled.section`
display:grid;
/* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(100%/ (4 + 1) + 0.1%, 300px, 100%), 1fr)
  );

margin-top:2rem;
`