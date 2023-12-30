import styled from "@emotion/styled";

interface Props {
  tags: string[]
}

const Tags = ({tags}: Props) => {
  return (
    <Container>
      {
        tags.map((text) => <Tag key={text}>
          {text}
        </Tag>)
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 4px;
  background-color:#eee;
  color:#333;
  padding: 0 8px;
  font-size: 14px;
  margin-bottom: 4px;
`;



export default Tags
