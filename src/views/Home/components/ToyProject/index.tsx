import styled from "@emotion/styled";
import {IProject} from "@/types/home";
import Links from "@/views/Home/components/Section/Links";
import Tags from "@/views/Home/components/Section/Tags";

interface Props {
    data: IProject
}

const ToyProject = ({data}: Props) => {

    return (
        <Container>
            <h3>{data.title}</h3>
            <Content>
                <Thumbnail>
                    <img src={data.thumbnail} alt=""/>
                </Thumbnail>
                <Description>
                    <p>{data.description}</p>
                    <p className={"percentage"}>기여도 {data.percentage}</p>
                    <Tags tags={data.tags}/>
                    <Links data={data.links}/>
                </Description>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 80px;

  h3 {
    font-size: 32px;
    margin-bottom: 24px;
  }
  
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  
`
const Thumbnail = styled.div`
  display: flex;
  flex-shrink: 0;
  padding-top: 6px;
  width: 300px;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  p {
    font-size: 20px;
  }
`


export default ToyProject