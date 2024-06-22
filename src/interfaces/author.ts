import type SocialLink from "./social-links";
import type StrapiImage from "./strapi-image";

export default interface Author {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        title: string;
        greeting: string;
        introduction: string;
        resume_link: string;
        profile_picture: {
            data: StrapiImage;
        };
        social_links: {
            data: SocialLink[];
        };
    };
}
