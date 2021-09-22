export default function condSpread<C extends boolean>(
  cond: C
): C extends true ? <V>(val: V) => V : <V>(val: V) => V extends any[] ? [] : {};
