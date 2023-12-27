import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsUUID, IsNotEmpty, IsInt, IsNumber,IsIn,IsDecimal, IsDateString, Matches } from "class-validator";

@Entity({ name: 'smartGenTable'})
export class SmartGen {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsNotEmpty()
  @Matches(/^(GEN-\d{4}-\d{4})$/, { message: 'deviceID must contain the string GEN and 8 numbers' })
  deviceID: string;

  @Column()
  @IsNotEmpty()
  @Matches(/^(SN-\d{3}-\d{3})$/, { message: 'clientId must contain SN and 6 numbers' })
  clientId: string;

  @Column()
  @IsInt()
  @IsIn([0,1])
  status: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  vPhase1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  vPhase2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  vPhase3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  I1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  I2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  I3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  realPower1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  realPower2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  realPower3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  apparentPower1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  apparentPower2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  apparentPower3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  powerFactor: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  frequency: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsDecimal()
  kwh: number;

  @Column()
  @IsNumber()
  signalStrength: number;

  @CreateDateColumn({ name: 'created_at' })
  @IsDateString()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @IsDateString()
  updatedAt: Date;
}
