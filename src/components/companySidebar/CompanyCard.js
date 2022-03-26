export const CompanyCard = ({ company }) => {
    return(
        <div className="rounded-md h-1/6 flex justify-center items-center m-2 bg-gray-900 relative">
            {company}
            <span className="absolute bottom-4 text-lg right-4">23</span>
        </div>
    )
}