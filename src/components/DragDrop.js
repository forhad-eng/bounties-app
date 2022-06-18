import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Bounties from './Bounties/Bounties'

const DragDrop = () => {
    const [state, setState] = useState(initialState)

    const onDragEnd = result => {
        const { destination, source } = result

        if (!destination) {
            //if DND out of the container, nothing will change in UI.
            return
        }

        //if DND occur at the same position, below code block will be execute
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return
        }

        //if DND occur in the same column but different position, below code block will be execute
        const sourceColumn = state.columns[source.droppableId]
        const destinationColumn = state.columns[destination.droppableId]

        if (sourceColumn.id === destinationColumn.id) {
            const newTaskIds = [...sourceColumn.taskIds]
            const [removedTaskId] = newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, removedTaskId)

            const newColumn = {
                ...sourceColumn,
                taskIds: newTaskIds
            }

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn
                }
            }
            setState(newState)
            return
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid lg:grid-cols-4 gap-6 mt-10 px-6">
                {state.columnOrder.map(columnId => {
                    const column = state.columns[columnId]
                    const tasks = column.taskIds.map(taskId => state.tasks[taskId])
                    return <Bounties key={column.id} column={column} tasks={tasks} />
                })}
            </div>
        </DragDropContext>
    )
}

const initialState = {
    tasks: {
        1: {
            id: 1,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        2: {
            id: 2,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        3: {
            id: 3,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        4: {
            id: 4,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        5: {
            id: 5,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        6: {
            id: 6,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        7: {
            id: 7,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        8: {
            id: 8,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        9: {
            id: 9,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        10: {
            id: 10,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        11: {
            id: 11,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        12: {
            id: 12,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        }
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'OPEN BOUNTIES',
            taskIds: [1, 2, 3]
        },
        'column-2': {
            id: 'column-2',
            title: 'ASSIGNED/IN PROCESS',
            taskIds: [4, 5, 6]
        },
        'column-3': {
            id: 'column-3',
            title: 'UNDER REVIEW',
            taskIds: [7, 8, 9]
        },
        'column-4': {
            id: 'column-4',
            title: 'CLOSE/REWARDED',
            taskIds: [10, 11, 12]
        }
    },

    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
}

export default DragDrop
