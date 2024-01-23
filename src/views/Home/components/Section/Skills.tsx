import styled from "@emotion/styled";
import { IProject } from "@/types/home";

interface Props {
  data: IProject;
}
const Skills = ({ data }: Props) => {
  return (
    <Container>
      <ul>{data.skills?.map((item) => <li key={item}>{item}</li>)}</ul>
    </Container>
  );
};

const Container = styled.div`
  li {
    list-style: circle;
  }
`;

export default Skills;
