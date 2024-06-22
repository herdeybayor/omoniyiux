export default interface SocialLink {
    id: number;
    attributes: {
        platform: string;
        url: string;
    };
}
