import { Draggable, Droppable } from 'react-beautiful-dnd'

const Bounties = ({ column, tasks }) => {
    const { title } = column
    return (
        <div>
            <div
                className={`bg-[#5A4860] rounded-tl-lg rounded-tr-lg mb-8 p-3 border-b-4 ${
                    title === 'OPEN BOUNTIES' && 'border-[#C4C4C4]'
                } ${title === 'ASSIGNED/IN PROCESS' && 'border-[#5F71D4]'} ${
                    title === 'UNDER REVIEW' && 'border-[#A516B9]'
                } ${title === 'CLOSE/REWARDED' && 'border-[#06DBAC]'}`}
            >
                <h2 className="text-lg text-white font-bold">{column.title}</h2>
            </div>

            <Droppable droppableId={column.id}>
                {provided => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="border-r-[1px] border-l-[1px] border-[#4A4A4A] px-3"
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        className={`bg-[#5A4860] my-6 rounded-xl text-white ${
                                            snapshot.isDragging ? 'border-2 border-[#A516B9]' : ''
                                        }`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <h4 className="text-lg font-bold py-5 px-4">Write A Blogpost For DAOHelper</h4>
                                        <p className="text-sm px-4">{task.taskDes}</p>
                                        <div
                                            className={`mt-4 p-2 px-4 text-sm rounded-bl-xl rounded-br-xl flex justify-between ${
                                                title === 'OPEN BOUNTIES' && 'bg-[#C4C4C4] text-black'
                                            } ${title === 'ASSIGNED/IN PROCESS' && 'bg-[#5F71D4]'} ${
                                                title === 'UNDER REVIEW' && 'bg-[#A516B9]'
                                            } ${title === 'CLOSE/REWARDED' && 'bg-[#06DBAC]'}`}
                                        >
                                            <span>Reward : $5</span>
                                            <span>Time left : 2days</span>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default Bounties
