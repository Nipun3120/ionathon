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


    useEffect(()=> {
      const fetchData = async()=> {



        const djiaData = await fetch(`${BASE_URL}/djia-data/`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }).then((data) => {
          data
            .json()
            .then((body) => {
              dispatch(
                dataActions.addDjiaData({
                  pred: body.prediction_djia,
                  p_value: body.p_value,
                  corr: body.corr,
                  price: body.prices[0],
                  tweets: body.top,
                })
              );
              return {"message": "success"}
            })
            .catch((err) => console.log(err));
        });
    
    
    
        const niftyData = await fetch(`${BASE_URL}/nifty-data/`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }).then((data) => {
          data
            .json()
            .then((body) => {
              dispatch(
                dataActions.addNiftyData({
                  pred: body.prediction_nifty,
                  p_value: body.p_value,
                  corr: body.corr,
                  price: body.prices[0],
                  tweets: body.top,
                })
              );
              return {"message": "success"}
            })
            .catch((err) => console.log(err));
        });
    
    
    
        const appleData = await fetch(`${BASE_URL}/apple-data/`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }).then((data) => {
          data
            .json()
            .then((body) => {
              dispatch(
                dataActions.addAppleData({
                  pred: body.prediction_apple,
                  p_value: body.p_value,
                  corr: body.corr,
                  price: body.prices[0],
                  tweets: body.top,
                  // senti: body.sentiment
                })
              );
              return {"message": "success"}
              // dispatch(dataActions.apiDataAdded());
            })
            .catch((err) => console.log(err));
        });
    
    
    
        
        const microsoftData = await fetch(`${BASE_URL}/microsoft-data/`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }).then((data) => {
          data
            .json()
            .then((body) => {
              console.log("microsoft data->", body)
              dispatch(
                dataActions.addMicroData({
                  pred: body.prediction_microsoft,
                  p_value: body.p_value,
                  corr: body.corr,
                  price: body.prices[0],
                  tweets: body.top,
                })
              );
              dispatch(dataActions.apiDataAdded());
              return {"message": "success"}
            })
            .catch((err) => console.log(err));
        });

      }
      fetchData();
    }, [])

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
