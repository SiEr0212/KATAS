/*

Most sales

You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.

*/

function top3(products, amounts, prices) {
  const rev = products.map(function (el, i, arr) {
    return { name: el, revenue: prices[i] * amounts[i], index: i };
  });
  const sorted = rev.sort(function (a, b) {
    return b.revenue - a.revenue || a.index - b.index;
  });
  return sorted.slice(0, 3).map(function (el) {
    return el.name;
  });
}

top3(
  ["Computer", "Cell Phones", "Vacuum Cleaner"],
  [3, 24, 8],
  [199, 299, 399]
);

// returns ["Cell Phones", "Vacuum Cleaner", "Computer"]);
