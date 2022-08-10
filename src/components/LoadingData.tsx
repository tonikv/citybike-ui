/*
    Show spinner and loading text if fetching of data is still on progress. State of loading is handled in main app.
*/

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const LoadingData = () => {
    return (
            <div className="d-grid gap-2 loading">
                <Button variant="danger" size="lg" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        )
}

export default LoadingData