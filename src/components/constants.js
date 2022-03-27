export const apiBody = {
  djia: {
    city: "New York",
    keyword: "DJIA",
  },
  nifty: {
    city: "Mumbai",
    keyword: "NIFTY",
  },
  apple: {
    city: "New York",
    keyword: "AAPL",
  },
  microsoft: {
    city: "New York",
    keyword: "MSFT",
  },
};


// export const getFilteredData = async(data) => {
//   console.log("prev", data)
//     let result = []
//     for(let i = 0; i<data.length; i++) {
//       const body = await data[i].value.body.json()
//       result.push(body)
//     }
//     return result;
// }