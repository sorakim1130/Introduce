import styled from "@emotion/styled";
import Link from "next/link";
import {IProject} from "@/types/home";
interface Props {
    data: IProject["links"]
}
const Links = ({data}:Props) => {

  return (
    <Container>
        {
            data?.map?.((item) => (
                <Link key={item.title} href={item.url} target={"_blank"}>{item.title}</Link>
            ))
        }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  a {
    text-decoration: underline;
    color: #123bc2;
  }
`;


export default Links