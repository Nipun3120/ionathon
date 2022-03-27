import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    curr: 0,
    dataAdded: false,
    data: [
      {
        // djia
        index: 0,
        pred: 0,
        tweets: [],
        senti: 0,
        corr: 0,
        price: 0,
        p_value:0,
      },
      {
        // nifty
        index: 1,
        pred: 0,
        tweets: [],
        senti: 0,
        corr: 0,
        price: 0,
        p_value:0,
      },
      {
        //apple
        index: 2,
        pred: 0,
        tweets: [],
        senti: 0,
        corr: 0,
        price: 0,
        p_value:0,
      },
      {
        //microsoft
        index: 3,
        pred: 0,
        tweets: [],
        senti: 0,
        corr: 0,
        price: 0,
        p_value:0,
      },
    ],
  },
  reducers: {
    onChange(state, action) {
      if (action.payload === "DJIA") {
        state.curr = 0;
      }
      if (action.payload === "NIFTY") {
        state.curr = 1;
      }
      if (action.payload === "AAPL") {
        state.curr = 2;
      }
      if (action.payload === "MSFT") {
        state.curr = 3;
      }
    },
    addDjiaData(state, action) {
      state.data[0].corr = action.payload.corr;
      state.data[0].pred = action.payload.pred;
      state.data[0].price = action.payload.price;
      state.data[0].tweets = action.payload.tweets;
      state.data[0].p_value = action.payload.p_value;
      state.data[0].senti = action.payload.senti;
    },
    addNiftyData(state, action) {
      state.data[1].corr = action.payload.corr;
      state.data[1].pred = action.payload.pred;
      state.data[1].price = action.payload.price;
      state.data[1].tweets = action.payload.tweets;
      state.data[1].p_value = action.payload.p_value;
      state.data[0].senti = action.payload.senti;
    },
    addAppleData(state, action) {
      state.data[2].corr = action.payload.corr;
      state.data[2].pred = action.payload.pred;
      state.data[2].price = action.payload.price;
      state.data[2].tweets = action.payload.tweets;
      state.data[2].p_value = action.payload.p_value;
      state.data[0].senti = action.payload.senti;
    },
    addMicroData(state, action) {
      state.data[3].corr = action.payload.corr;
      state.data[3].pred = action.payload.pred;
      state.data[3].price = action.payload.price;
      state.data[3].tweets = action.payload.tweets;
      state.data[3].p_value = action.payload.p_value;
      state.data[0].senti = action.payload.senti;
    },
    apiDataAdded(state, action) {
      state.dataAdded = true
    }
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
