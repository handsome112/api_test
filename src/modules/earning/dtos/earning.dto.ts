import { ObjectId } from 'mongodb';
import { pick } from 'lodash';

export interface IEarning {
  _id: ObjectId;
  userId: ObjectId;
  userInfo: any;
  transactionTokenId: ObjectId;
  transactionInfo: any;
  performerId: ObjectId;
  performerInfo: any;
  source: string;
  target: string;
  type: string;
  grossPrice: number;
  netPrice: number;
  commission: number;
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
  paidAt: Date;
  sourceId: ObjectId;
  targetId: ObjectId;
  transactionStatus: string;
  sourceInfo: any;
  targetInfo: any;
  conversionRate?: number;
  sourceType: string;
}

export class EarningDto {
  _id: ObjectId;

  userId: ObjectId;

  userInfo: any;

  transactionTokenId: ObjectId;

  transactionInfo: any;

  performerId: ObjectId;

  performerInfo: any;

  source: string;

  target: string;

  type: string;

  grossPrice: number;

  netPrice: number;

  commission: number;

  isPaid: boolean;

  createdAt: Date;

  updatedAt: Date;

  paidAt: Date;

  sourceId: ObjectId;

  targetId: ObjectId;

  transactionStatus: string;

  sourceInfo: any;

  targetInfo: any;

  conversionRate: number;

  sourceType: string;

  price: number;

  constructor(data?: Partial<EarningDto>) {
    Object.assign(
      this,
      pick(data, [
        '_id',
        'userId',
        'userInfo',
        'transactionTokenId',
        'transactionInfo',
        'performerId',
        'performerInfo',
        'sourceType',
        'grossPrice',
        'netPrice',
        'isPaid',
        'commission',
        'createdAt',
        'updatedAt',
        'paidAt',
        'transactionStatus',
        'sourceId',
        'targetId',
        'source',
        'target',
        'type',
        'sourceInfo',
        'targetInfo',
        'conversionRate',
        'price'
      ])
    );
  }

  toResponse(includePrivate = false): IEarning {
    const publicInfo = {
      _id: this._id,
      userId: this.userId,
      userInfo: this.userInfo,
      transactionTokenId: this.transactionTokenId,
      transactionInfo: this.transactionInfo,
      performerId: this.performerId,
      performerInfo: this.performerInfo,
      sourceType: this.sourceType,
      grossPrice: this.grossPrice,
      netPrice: this.netPrice,
      isPaid: this.isPaid,
      commission: this.commission,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      paidAt: this.paidAt,
      transactionStatus: this.transactionStatus,
      sourceId: this.sourceId,
      targetId: this.targetId,
      source: this.source,
      target: this.target,
      type: this.type,
      sourceInfo: this.sourceInfo,
      targetInfo: this.targetInfo,
      price: this.price

    };

    if (!includePrivate) {
      return publicInfo;
    }

    return {
      ...publicInfo,
      conversionRate: this.conversionRate
    };
  }
}

export interface IEarningStatResponse {
  totalPrice: number;
  paidPrice: number;
  remainingPrice: number;
}
