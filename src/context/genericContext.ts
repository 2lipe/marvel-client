// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface GenericContext<T, P = any> {
  type: T;
  payload: P;
}
