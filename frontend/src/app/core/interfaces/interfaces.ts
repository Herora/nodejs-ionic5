export interface RespuestaNo {
  error: boolean;
  data: DataJson[];
}

export interface DataJson {
  _id: string;
  line_number: string;
  formatted_line_number: string;
  expiration_date: string;
  last_payment_date: string;
  payment_reference: number;
  invoice_status: string;
  amount: number;
  currency: string;
  country_mobile_code: number;
  payment_history: Paymenthistory[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Paymenthistory {
  _id: string;
  period: string;
  amount: number;
  balance: number;
}