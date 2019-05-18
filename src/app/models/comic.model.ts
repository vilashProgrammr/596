export class Comic {
    public id : number;
    public title : string;
    public description : string;
    public thumbnail : Thumbnail;
    public saleDate: String;
    public diamondCode: String;
    public price: number;
}

export class Thumbnail {
    public path: string;
    public extension: string;
}