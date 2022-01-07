// ADD CODE HERE
function addWaldo(obj) {
  obj["Waldo"] = "unknown";
  return obj;
}
// Uncomment these to check your work!
const siliconValley = {
  Richard: "Hendricks",
  Erlich: "Bachman",
  Bertram: "Gilfoyle",
};
console.log(addWaldo(siliconValley)); // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }
