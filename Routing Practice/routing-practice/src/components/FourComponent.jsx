import { useParams } from 'react-router-dom'

const FourComponent = () => {
 const {word, tcoler, bgcoler } = useParams()
  return (
    <h1 style={{ color: tcoler, backgroundColor: bgcoler }}>The word is: {word}</h1>
  )
}

export default FourComponent;