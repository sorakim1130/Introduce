import styled from "@emotion/styled";
import Link from "next/link";
import {ICompanyProject} from "@/types/home";
interface Props {
    data: ICompanyProject
}
const Links = ({data}:Props) => {

  return (
    <Container>
            {
                data.links.map((item) => (
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