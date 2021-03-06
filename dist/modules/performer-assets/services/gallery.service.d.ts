import { Model } from 'mongoose';
import { PageableData, QueueEventService } from 'src/kernel';
import { PerformerService } from 'src/modules/performer/services';
import { UserDto } from 'src/modules/user/dtos';
import { ObjectId } from 'mongodb';
import { FileService } from 'src/modules/file/services';
import { PaymentTokenService } from 'src/modules/purchased-item/services';
import { GalleryUpdatePayload } from '../payloads/gallery-update.payload';
import { GalleryDto } from '../dtos';
import { GalleryCreatePayload, GallerySearchRequest } from '../payloads';
import { GalleryModel, PhotoModel } from '../models';
export declare class GalleryService {
    private readonly performerService;
    private readonly paymentTokenService;
    private readonly galleryModel;
    private readonly photoModel;
    private readonly fileService;
    private readonly queueEventServce;
    constructor(performerService: PerformerService, paymentTokenService: PaymentTokenService, galleryModel: Model<GalleryModel>, photoModel: Model<PhotoModel>, fileService: FileService, queueEventServce: QueueEventService);
    create(payload: GalleryCreatePayload, creator?: UserDto): Promise<GalleryDto>;
    update(id: string | ObjectId, payload: GalleryUpdatePayload, creator?: UserDto): Promise<GalleryDto>;
    findByIds(ids: string[] | ObjectId[]): Promise<GalleryDto[]>;
    findById(id: string | ObjectId): Promise<GalleryDto>;
    details(id: string | ObjectId, user: UserDto): Promise<GalleryDto>;
    adminSearch(req: GallerySearchRequest, jwToken: string): Promise<PageableData<GalleryDto>>;
    performerSearch(req: GallerySearchRequest, user: UserDto, jwToken: string): Promise<PageableData<GalleryDto>>;
    userSearch(req: GallerySearchRequest, user: UserDto, jwToken: string): Promise<PageableData<GalleryDto>>;
    updateCover(galleryId: string | ObjectId, photoId: string | ObjectId): Promise<boolean>;
    delete(galleryId: string | ObjectId): Promise<boolean>;
}
