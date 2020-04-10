import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log(
    `page Number - 1 * pagesSize = startIndex  ${pageNumber} - 1 * ${pageSize} = ${startIndex} `
  );
  // Lodash method will slice array from 'startIndex'.
  // _.slice(items, startIndex);
  return _(items).slice(startIndex).take(pageSize).value();
}
