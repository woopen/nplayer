export function concatUint8Array(...arr: Uint8Array[]): Uint8Array {
  const data = new Uint8Array(arr.reduce((p, c) => p + c.length, 0));
  let prevLen = 0;
  arr.forEach((d) => {
    data.set(d, prevLen);
    prevLen = d.length;
  });
  return data;
}