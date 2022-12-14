import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Questions</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Addition
            </Option>
            <Option>Addition</Option>
            <Option>Subtraction</Option>
            <Option>Multiply</Option>
            <Option>Divide</Option>

          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Questions:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Submission(asc)</Option>
            <Option>Submission (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductList;
