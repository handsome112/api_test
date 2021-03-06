import { ObjectId } from 'mongodb';
import { IPerformerResponse } from 'src/modules/performer/dtos';
export interface IFavouriteData {
    favoriteId: ObjectId;
    ownerId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export interface IFavouriteResponse {
    _id: ObjectId;
    favoriteId: ObjectId;
    performer: IPerformerResponse;
    ownerId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FavouriteDto {
    _id: ObjectId;
    favoriteId: ObjectId;
    ownerId: ObjectId;
    performer: IPerformerResponse;
    createdAt: Date;
    updatedAt: Date;
    constructor(data: Partial<IFavouriteData>);
}
