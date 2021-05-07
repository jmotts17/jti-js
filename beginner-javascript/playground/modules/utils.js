export const last = 'bos';
const middle = 'slam dunk';
export function returnHi(name) {
  return `hi ${name} ${last}`;
}
const first = 'wes';
// Named exports
// export {last}
export { middle };
export default first;
