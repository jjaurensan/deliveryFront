import { Price } from './price';
import { Carrier } from './carrier';

export interface Pricing {
    idPricing?: number;
    arragement?: number;
    floor?: number;
    listPrice?: Price[];
    carrier?: Carrier;
}