import styled from "@emotion/styled";
import {ICompanyProject} from "@/types/home";
import Tags from "@/views/Home/components/Section/Tags";
import Link from "next/link";

interface Props {
  data: ICompanyProject
}

const Project = ({data}: Props) => {
  return (
    <Container>
      <h4>{data.title}</h4>
      <p className={"description"}>{data.description}</p>
      <p className={"percentage"}>기여도 {data.percentage}</p>
      <Tags tags={data.tags}/>
      <Links>
      {
        data.links.map((item) => (
          <Link key={item.title} href={item.url} target={"_blank"}>{item.title}</Link>
        ))
      }
      </Links>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  white-space: pre-line;
  h4 {
    font-size: 32px;
  }
  
  .description {
    font-size: 20px;
  }
  
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  a {
    text-decoration: underline;
    color: #123bc2;
  }
`;



export default Project
