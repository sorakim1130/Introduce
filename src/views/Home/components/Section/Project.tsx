import styled from "@emotion/styled";
import {ICompanyProject} from "@/types/home";
import Tags from "@/views/Home/components/Section/Tags";
import Link from "next/link";
import Links from "@/views/Home/components/Section/Links";

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
        {
            data.links && ( <Links data={data}/>

            )
        }

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
    color: #555;
  }
  
`;




export default Project
