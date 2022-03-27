import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TweetTemplate } from "./TweetTemplate"
export const TweetsDisplay = ({data}) => {
    const dataAdded = useSelector(state=> state.dataState.dataAdded)
    const curr = useSelector(state=> state.dataState.curr)
    const [tweets, setTweets] = useState([]);
    // let tweets = []
    // const tweets = [
    //     {score: 1, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    //     {score: 2, text: "00s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh"},
    //     {score: 3, text: "tablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"},
    //     {score: 4, text: "that that that"},
    //     {score: 5, text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"},
    //     {score: 6, text: "that that that"},
    //     {score: 7, text: "this this this this"},
    //     {score: 8, text: "that that that"},
    //     {score: 9, text: "this this this this"},
    //     {score: 10, text: "that that that"},
    // ]
    
    useEffect(()=> {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log(data.tweets, curr)
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