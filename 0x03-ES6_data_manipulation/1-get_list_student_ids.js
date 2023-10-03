export default function getListStudentIds(arr) {
  let newArr = [];
  if (Array.isArray(arr)) {
    newArr = arr.map((res) => res.id);
  }

  return newArr;
}

