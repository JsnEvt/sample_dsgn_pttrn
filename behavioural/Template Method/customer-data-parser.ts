import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {} //recebendo o caminho do arquivo

  //para que o metodo abaixo nao seja sobrescrito pelas subclasses e seja
  //usado como metodo final, usamos a
  //expressao readonly no comeco do metodo
  readonly fixCustomerData = async (): Promise<void> => {
    //esse metodo traz os arquivos para a conversao.
    this.customerData = await this.parseDate(); //aqui, aguarda a busca dos arquivos
    this.customerData = this.fixCpf(); //aqui, faz a conversao.
  };

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => {
      return { ...customer, cpf: customer.cpf.replace(/\D/g, '') };
    });
  }

  protected abstract parseDate(): Promise<CustomerData[]>;
}

//pode-se fazer o uso do Hook como metodo para determinar outro metodo a ser
//executado.
