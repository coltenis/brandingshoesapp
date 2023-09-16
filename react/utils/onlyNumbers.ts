
export const onlyNumbers = function (e: KeyboardEvent) {
  const regex = new RegExp("^[0-9]+$");
  const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(key)) {
    e.preventDefault();
    return false;
  }
  return;
};