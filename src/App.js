import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Bounties from './components/Bounties/Bounties'

function App() {
    const [state, setState] = useState(initialState)

    const onDragEnd = result => {
        const { destination, source } = result
    }

    return (
        <div className="bg-[#100E2E] rounded-lg">
            <h2 className="text-4xl text-white text-center font-bold border-b-2 border-[#4A4A4A] mx-6 pt-10 pb-1">
                Bounties
            </h2>
            <DragDropContext onDragEnd={onDragEnd}>
                {state.columnOrder.map(columnId => {
                    const column = state.columns[columnId]
                    const tasks = column.taskIds.map(taskId => state.tasks[taskId])
                    return <Bounties key={column.id} column={column} tasks={tasks} />
                })}
            </DragDropContext>
        </div>
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
            id: 1,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        8: {
            id: 2,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        9: {
            id: 3,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        10: {
            id: 4,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        11: {
            id: 5,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        },
        12: {
            id: 6,
            taskDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non.'
        }
    },

    columns: {
        'column-1': {
            colId: 'column-1',
            taskIds: [1, 2, 3]
        },
        'column-2': {
            colId: 'column-2',
            taskIds: [4, 5, 6]
        },
        'column-3': {
            colId: 'column-3',
            taskIds: [7, 8, 9]
        },
        'column-4': {
            colId: 'column-4',
            taskIds: [10, 11, 12]
        }
    },

    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default App
