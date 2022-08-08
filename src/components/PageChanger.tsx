import Button from 'react-bootstrap/Button';
import LoadingData from '../components/LoadingData';

import { IPageChanger } from '../types';

const mainStyle = {
    textAlign: "center" as "center",
}

const PageChanger: React.FC<IPageChanger> = ({ changePageNext, changePagePrev, isLoading }) => {
    
    if (isLoading) {
        return (
            <LoadingData/>
        )
    }
    return (<div style={mainStyle}>
            <Button size="sm" onClick={changePagePrev}> Previous Page</Button>
            <Button size="sm" style={{marginLeft: 10}} onClick={changePageNext}> Next Page</Button>
        </div>
    )
}

export default PageChanger