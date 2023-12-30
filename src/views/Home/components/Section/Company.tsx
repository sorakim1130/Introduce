import styled from "@emotion/styled";
import {ICompany} from "@/types/home";
import Project from "@/views/Home/components/Section/Project";

interface Props {
  data: ICompany
}

const Company = ({data}: Props) => {
  return (
    <Container>
      <HStack>
        <Info>
        <h3>{data.name}</h3>
        <p className={"company-period"}>{data.period}</p>
        </Info>
        <Projects>
        {
          data.projects.map((item) => <Project key={item.title} data={item}/>)
        }
        </Projects>
      </HStack>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 60px;
  h3 {
    font-size: 32px;
    margin-bottom: 8px;
  }
  .company-period {
    font-size: 22px;
  }
`;

const HStack = styled.div`
  display: flex;
`;

const Info = styled.div`
  flex-shrink: 0;
  width: 280px;
`;

const Projects = styled.div`
  flex: 1;
`;









export default Company
