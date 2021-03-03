// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface GenericContext<T, P = unknown> {
  type: T;
  payload?: P;
}
