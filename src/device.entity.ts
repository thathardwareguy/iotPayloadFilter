import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity({ name: 'smartGenTable' })
export class SmartGen {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  deviceName: string;

  @Column()
  deviceType: string;

  @Column()
  status: number;

  @Column()
  vPhase1: number;

  @Column()
  vPhase2: number;

  @Column()
  vPhase3: number;

  @Column()
  I1: number;

  @Column()
  I2: number;

  @Column()
  I3: number;

  @Column()
  realPower1: number;

  @Column()
  realPower2: number;

  @Column()
  realPower3: number;

  @Column()
  apparentPower1: number;

  @Column()
  apparentPower2: number;

  @Column()
  apparentPower3: number;

  @Column()
  powerFactor: number;

  @Column()
  frequency: number;

  @Column()
  kwh: number;

  @Column()
  signalStrength: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}