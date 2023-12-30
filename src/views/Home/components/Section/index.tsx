import styled from "@emotion/styled";
import {ISection} from "@/types/home";
import Company from "@/views/Home/components/Section/Company";

interface Props {
  data: ISection
}

const Section = ({data}: Props) => {
  return (
    <Container>
      <h2>{data.title}</h2>
      {
        data.companies.map((item) => <Company key={item.name} data={item}/>)
      }
    </Container>
  );
};

const Container = styled.div`
  h2 {
    font-size: 48px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 24px;
  }
`;

export default Section
