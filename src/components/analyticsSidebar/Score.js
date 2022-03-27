export const Score = ({data}) => {
    return (

        <div className="flex-col mt-24 mx-10 justify-evenly">
            {/* <div className="flex mt-24 mx-10 justify-evenly">
                <span className="bg-gray-900 p-4 rounded-md w-5/12 h-32 flex justify-center items-center">Sentiment: 30 </span> 
            </div> */}
            <div className="flex mt-24 mx-10 justify-evenly">
                <span className="bg-gray-900 p-4 rounded-md w-5/12 h-32 flex justify-center items-center">Rigidity: {data.corr.toFixed(2)} </span> <br/>
                <span className="bg-gray-900 p-4 rounded-md w-5/12 h-32 flex justify-center items-center">P Value: {data.p_value.toFixed(2)} </span> 

            </div>
        </div>
    )
}