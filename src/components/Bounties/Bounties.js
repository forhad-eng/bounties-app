const Bounties = ({ column, tasks }) => {
    const { title } = column
    return (
        <div
            className={`bg-[#5A4860] rounded-tl-lg rounded-tr-lg mb-8 p-4 border-b-4 ${
                title === 'OPEN BOUNTIES' && 'border-[#C4C4C4]'
            } ${title === 'ASSIGNED/IN PROCESS' && 'border-[#5F71D4]'} ${
                title === 'UNDER REVIEW' && 'border-[#A516B9]'
            } ${title === 'CLOSE/REWARDED' && 'border-[#06DBAC]'}`}
        >
            <h2 className="text-lg text-white font-bold">{column.title}</h2>
        </div>
    )
}

export default Bounties
