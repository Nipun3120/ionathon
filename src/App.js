import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "./App.css";
import { CompanySidebar, AnalyticsSidebar, TwitterSidebar } from "./components";
import { apiBody, getFilteredData } from "./components/constants";
import { BASE_URL } from "./config";
import { dataActions } from "./store/dataSlice";

function App() {
  const location = useLocation();
  const company = location.pathname;
  const dispatch = useDispatch();


  const djiaData = async ()=> {
    fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(apiBody.djia),
    }).then((data) => {
      data
        .json()
        .then((body) => {
          dispatch(
            dataActions.addDjiaData({
              pred: body.prediction,
              p_value: body.p_value,
              corr: body.corr,
              price: body.prices[0],
              tweets: body.top,
            })
          );
        })
        .catch((err) => console.log(err));
    });
  }

  const niftydata = async()=> {
    fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(apiBody.nifty),
    }).then((data) => {
      data
        .json()
        .then((body) => {
          dispatch(
            dataActions.addNiftyData({
              pred: body.prediction,
              p_value: body.p_value,
              corr: body.corr,
              price: body.prices[0],
              tweets: body.top,
            })
          );
        })
        .catch((err) => console.log(err));
    });
  }

  const appledata = async () => {
    fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(apiBody.apple),
    }).then((data) => {
      data
        .json()
        .then((body) => {
          dispatch(
            dataActions.addAppleData({
              pred: body.prediction,
              p_value: body.p_value,
              corr: body.corr,
              price: body.prices[0],
              tweets: body.top,
              // senti: body.sentiment
            })
          );
          // dispatch(dataActions.apiDataAdded());
        })
        .catch((err) => console.log(err));
    });
  };

  const microsoftdata = async()=> {
    fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(apiBody.microsoft),
    }).then((data) => {
      data
        .json()
        .then((body) => {
          dispatch(
            dataActions.addMicroData({
              pred: body.prediction,
              p_value: body.p_value,
              corr: body.corr,
              price: body.prices[0],
              tweets: body.top,
            })
          );
          dispatch(dataActions.apiDataAdded());
        })
        .catch((err) => console.log(err));
    });
  }

  // Promise.allSettled([
  //   fetch(`${BASE_URL}/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "Application/json",
  //     },
  //     body: JSON.stringify(apiBody.djia),
  //   }),
  // ])
  //   .then((data) => {
  //     let filteredData = getFilteredData(data);
  //     console.log(filteredData);
  //   })
  //   .catch((err) => console.error(err));

  djiaData();
  niftydata();
  appledata();
  microsoftdata();
  useEffect(() => {
    console.log("change", company, typeof company);

    if (company === "/DJIA") dispatch(dataActions.onChange("DJIA"));
    if (company === "/NIFTY") dispatch(dataActions.onChange("NIFTY"));
    if (company === "/AAPL") dispatch(dataActions.onChange("AAPL"));
    if (company === "/MSFT") dispatch(dataActions.onChange("MSFT"));
  }, [company]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="w-1/5 bg-slate-500">
          <CompanySidebar />
        </div>
        <div className="w-2/5">
          <AnalyticsSidebar />
        </div>
        <div className="w-2/5 bg-neutral-600">
          <TwitterSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
