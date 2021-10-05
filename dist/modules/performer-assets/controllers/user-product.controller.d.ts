import { Response, Request as Req } from 'express';
import { DataResponse } from 'src/kernel';
import { AuthService } from 'src/modules/auth/services';
import { UserDto } from 'src/modules/user/dtos';
import { FileService } from 'src/modules/file/services';
import { PaymentTokenService } from 'src/modules/purchased-item/services';
import { ProductService } from '../services/product.service';
import { ProductSearchService } from '../services/product-search.service';
import { ProductSearchRequest } from '../payloads';
export declare class UserProductsController {
    private readonly authService;
    private readonly productService;
    private readonly productSearchService;
    private readonly fileService;
    private readonly paymentTokenService;
    constructor(authService: AuthService, productService: ProductService, productSearchService: ProductSearchService, fileService: FileService, paymentTokenService: PaymentTokenService);
    search(req: ProductSearchRequest, user: UserDto): Promise<DataResponse<{
        data: Pick<import("../dtos").ProductDto, "_id" | "name" | "createdBy" | "createdAt" | "updatedAt" | "performerId" | "updatedBy" | "status" | "type" | "description" | "image" | "performer" | "token" | "stock" | "publish" | "isBought">[];
        total: number;
    }>>;
    details(id: string): Promise<DataResponse<Pick<import("../dtos").ProductDto, "_id" | "name" | "createdBy" | "createdAt" | "updatedAt" | "performerId" | "updatedBy" | "status" | "type" | "description" | "image" | "performer" | "token" | "stock" | "publish" | "isBought">>>;
    getDownloadLink(id: string, user: UserDto): Promise<DataResponse<{
        downloadUrl: string;
    }>>;
    checkAuth(request: Req, response: Response): Promise<Response<any, Record<string, any>>>;
}
