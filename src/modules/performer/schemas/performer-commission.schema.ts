import { Schema } from 'mongoose';

export const performerCommissionSchema = new Schema({
  performerId: {
    type: Schema.Types.ObjectId,
    index: true
  },
  studioCommission: {
    type: Number,
    default: 0
  },
  memberCommission: {
    type: Number,
    default: 0
  },
  tipCommission: {
    type: Number,
    default: 20
  },
  privateCallCommission: {
    type: Number,
    default: 20
  },
  groupCallCommission: {
    type: Number,
    default: 20
  },
  productCommission: {
    type: Number,
    default: 20
  },
  albumCommission: {
    type: Number,
    default: 20
  },
  videoCommission: {
    type: Number,
    default: 20
  },
  createdBy: Schema.Types.ObjectId,
  updatedBy: Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
