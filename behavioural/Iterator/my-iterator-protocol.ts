// O TypeScript ja tem a interface do iterator, o que sera feito aqui
// e a extensao da interface do TypeScript.

//<T> = tipo
export interface MyIteratorProtocol<T> extends Iterator<T> {
  reset(): void;
}
