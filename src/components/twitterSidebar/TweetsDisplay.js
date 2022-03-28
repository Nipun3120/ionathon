import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TweetTemplate } from "./TweetTemplate"
export const TweetsDisplay = ({data}) => {
    const dataAdded = useSelector(state=> state.dataState.dataAdded)
    const curr = useSelector(state=> state.dataState.curr)
    const [tweets, setTweets] = useState([]);
    
    useEffect(()=> {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setTweets(data.tweets)
    }, [dataAdded, curr])

    return(
        <div className="max-h-screen overflow-scroll">
            {
                tweets.map(tweet => <div><TweetTemplate tweet={tweet}/></div>)
            }
        </div>
    )
}