import { Customer } from '@modules/customers/domain/Customer';
import { CUSTOMER, ICustomerRepository } from '@modules/customers/repositories';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCustomersUseCase {
  constructor(
    @inject(CUSTOMER.CUSTOMER_REPOSITORY)
    private customerRepository: ICustomerRepository,
  ) {}

  async execute(name?: string): Promise<Customer[]> {
    return this.customerRepository.find(name);
  }
}

export { ListCustomersUseCase };
