import styled from "@emotion/styled";
import {myStory} from "@/data/home";

const MyStory = () => {
  return (
    <Container>
      <h2>{myStory.title}</h2>
      <p>{myStory.description}</p>
    </Container>
  );
};

const Container = styled.div`
  white-space: pre-line;
  margin-bottom: 60px;
  h2 {
    font-size: 48px;
    margin-bottom: 48px;
    font-weight: bold;
  }
  
  p {
    font-size: 22px;
  }
`;

export default MyStory
