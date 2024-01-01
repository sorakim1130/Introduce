import styled from "@emotion/styled";
import Tags from "@/views/Home/components/Section/Tags";
import Link from "next/link";
import Links from "@/views/Home/components/Section/Links";
import {IProject} from "@/types/home";

interface Props {
  data: IProject
}

const Project = ({data}: Props) => {
  return (
    <Container>
      <h4>{data.title}</h4>
    <Thumbnail>
        <img src={data.thumbnail} alt=""/>
    </Thumbnail>
      <p className={"description"}>{data.description}</p>
      <p className={"percentage"}>기여도 {data.percentage}</p>
      <Tags tags={data.tags}/>
        {
            data.links && ( <Links data={data.links}/>

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
const Thumbnail = styled.div`
  display: flex;
  flex-shrink: 0;
`



export default Project
