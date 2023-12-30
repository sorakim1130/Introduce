import styled from "@emotion/styled";
import {sections} from "@/data/home";
import MyStory from "@/views/Home/components/MyStory";
import Section from "@/views/Home/components/Section";

const Home = () => {
  return (
    <Container>
      <MyStory/>
      {
        sections.map((item) => <Section key={item.title} data={item}/>)
      }
    </Container>
  );
};

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 100px 0;
`;

export default Home
