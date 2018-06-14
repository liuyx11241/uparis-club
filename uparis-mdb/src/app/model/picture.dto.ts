export class Picture {
    id: string;
    idProduct: string;
    srcUrl: string;
    altText: string;
    title: string;
    description: string;

    constructor(id: string, srcUrl: string, title: string, description: string) {
        this.id = id;
        this.srcUrl = srcUrl;
        this.title = title;
        this.description = description;
    }
}
