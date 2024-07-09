import { Container, Row } from "react-bootstrap";
import Image from 'next/image'

export default function AuthLayout({ children }: {
  readonly children: React.ReactNode;
}) {
  return (
    <section className="h-100">
      <Container className="h-100">
        <Row className="justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center">
              <Image src="/productLogo.jpg" alt="Logo" width={200} height={200}></Image>
            </div>
            {children}
          </div>
        </Row>
      </Container>
    </section>
  );
}