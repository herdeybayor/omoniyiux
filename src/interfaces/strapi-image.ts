export default interface StrapiImage {
    id: number;
    attributes: {
        name: string;
        width: number;
        height: number;
        url: string;
    };
}
