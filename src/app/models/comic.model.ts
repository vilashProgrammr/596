export class Comic {
    public id : number;
    public title : string;
    public description : string;
    public thumbnail : Thumbnail;
}

export class Thumbnail {
    public path: string;
    public extension: string;
}