export interface ICustomer {
  id: any;
  description?: string | null;
}

export type NewCustomer = Omit<ICustomer, 'id'> & { id: null };
