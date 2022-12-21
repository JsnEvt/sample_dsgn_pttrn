import { SystemUserProxy } from './system-user-proxy';

//por ser assincrono, as instrucoes abaixo deverao ser colocadas dentro
// de uma funcao

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Tadeu', 'tadeuPacifico');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAddresses());

  console.log('Isso vai se repetir');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
