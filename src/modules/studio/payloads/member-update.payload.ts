import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  Max,
  Min
} from 'class-validator';

export class UpdateCommissionPayload {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  commission: number;
}
