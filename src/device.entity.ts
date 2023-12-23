import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity({ name: 'smartGenTable' })
export class SmartGen {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  deviceID: string;

  @Column()
  clientId: string;

  @Column()
  status: number;

  @Column('decimal', { precision: 10, scale: 2 })
  vPhase1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  vPhase2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  vPhase3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  I1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  I2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  I3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  realPower1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  realPower2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  realPower3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  apparentPower1: number;

  @Column('decimal', { precision: 10, scale: 2 })
  apparentPower2: number;

  @Column('decimal', { precision: 10, scale: 2 })
  apparentPower3: number;

  @Column('decimal', { precision: 10, scale: 2 })
  powerFactor: number;

  @Column('decimal', { precision: 10, scale: 2 })
  frequency: number;

  @Column('decimal', { precision: 10, scale: 2 })
  kwh: number;

  @Column()
  signalStrength: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}