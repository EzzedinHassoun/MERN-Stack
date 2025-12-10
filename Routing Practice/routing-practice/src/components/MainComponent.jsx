import { useParams } from 'react-router-dom'
const MainComponent = () => {
    const { num } = useParams();
    return (
        <>
            {isNaN(num) ?<h1>Hello The word is: {num}</h1>: <h1>The number is: {num}</h1>}

        </>
    )
}
export default MainComponent;


