// this is to configure and start tests
export default function add(...args: number[]): number {
  return args.reduce((a: number, b: number) => a + b, 0);
}
