export interface Configuration {
  readonly id: number;
  readonly engineType: EngineType;
  readonly brand: Brand;
  readonly model: Model;
}

export interface Brand {
  readonly id: number;
  readonly name: string;
  readonly code: string;
}

export interface Model {
  readonly id: number;
  readonly name: string;
  readonly code: string;
}

export interface Color {
  readonly name?: string;
  readonly hexadecimalNotation?: string;
  getColors?(): Color[];
}

export interface Order {
  paymentType: Payment;
  deliveryType: DeliveryType;
  dateAndTime: Date;
  lastName: string;
  firstName:string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  listAddressesAuthorizedPersons: AddressesAuthorizedPersons[];
}

export interface AddressesAuthorizedPersons{
  lastName: string;
  firstName:string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
}

export interface DeliveryType {
  readonly id: number;
  readonly name: string;
}

export const EngineTypeRecords: Record<number, string> = {
  1: 'Spalinowy',
  2: 'Elektryczny',
  3: 'Akumulatorowy',
};

export type EngineType = keyof typeof EngineTypeRecords;


export type PaymentType = {
  [key: number]: string;
};

export const Payments: PaymentType = {
  1: 'gotówka',
  2: 'karta',
  3: 'przelew',
  4: 'BLIK',
};

export type Payment = keyof typeof Payments;


export const brands: Brand[] = [
  { name: 'Husqvarna', code: 'Husqvarna', id: 1 },
  { name: 'Honda', code: 'Honda', id: 2 },
  { name: 'Stihl', code: 'Stihl', id: 3 },
];

export const models: Model[] = [
  { name: 'Husqvarna Automower 450X', code: 'Husqvarna Automower', id: 1 },
  { name: 'Honda HRX217VKA', code: 'Honda HRX', id: 2 },
  { name: 'Stihl RMA 510', code: 'Stihl RMA', id: 3 },
];

export const deliveryType: DeliveryType[] = [
  { name: 'kurier', id: 1 },
  { name: 'odbiór osobisty', id: 2 },
  { name: 'odbiór w punkcie usługowym', id: 3 },
];


export interface OrderDetails {
  id: number;
  engineType: string;
  brand: string;
  model: string;
  paymentType: string;
  deliveryType: string;
  dateAndTime: Date | Date[];   
  lastName: string;
  firstName: string;
}