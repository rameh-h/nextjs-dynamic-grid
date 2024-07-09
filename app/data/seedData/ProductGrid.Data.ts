const products: ProductGridData[] = [{
    id: 1,
    alias: "",
    dataOfCreate: new Date(),
    description: "Test",
    title: "SONY"
}]


interface ProductGridData {
    id: number,
    alias: string,
    title: string,
    description: string,
    dataOfCreate: Date
}

export default products;