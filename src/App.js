import DragDrop from './components/DragDrop'

function App() {
    return (
        <div className="bg-[#100E2E] rounded-lg">
            <h2 className="text-4xl text-white text-center font-bold border-b-[1px] border-[#4A4A4A] lg:mx-6 pt-10 pb-1">
                Bounties
            </h2>
            <DragDrop />
        </div>
    )
}
export default App
