'use client'
import {Card, CardHeader, Col, Row} from "react-bootstrap";
import Link from "next/link";
import GridPage from "@/app/dynamic-grid/page";

export default function Page() {
    return (
        <Row>
            <Col md={"8"} className={"mt-4"}>
                <h4>Grid Template</h4>
                <Card className="p-3 pb-5">
                    <GridPage/>
                </Card>
            </Col>
        </Row>
    )
}