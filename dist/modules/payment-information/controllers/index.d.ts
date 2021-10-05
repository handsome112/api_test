import { LeanDocument } from 'mongoose';
import { DataResponse, PageableData } from 'src/kernel';
import { PaymentInformationPayload, AdminCreatePaymentInformationPayload, AdminSearchPaymentInformationPayload } from '../payloads';
import { PaymentInformationService } from '../services';
import { PaymentInformationModel } from '../models';
export declare class PaymentInformationController {
    private readonly paymentInformationService;
    constructor(paymentInformationService: PaymentInformationService);
    create(user: any, payload: PaymentInformationPayload): Promise<DataResponse<LeanDocument<PaymentInformationModel>>>;
    get(user: any, payload: PaymentInformationPayload): Promise<DataResponse<LeanDocument<PaymentInformationModel>>>;
    adminGet(id: string): Promise<DataResponse<{
        sourceInfo: import("../../performer/dtos").PerformerDto | import("../../studio/dtos").StudioDto;
        _id: import("bson").ObjectId;
        __v?: number;
        id?: any;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        sourceId: import("bson").ObjectId;
        sourceType: string;
    }>>;
    adminUpdate(user: any, payload: AdminCreatePaymentInformationPayload): Promise<DataResponse<LeanDocument<PaymentInformationModel>>>;
    adminSearch(user: any, payload: AdminSearchPaymentInformationPayload): Promise<DataResponse<PageableData<any>>>;
}
