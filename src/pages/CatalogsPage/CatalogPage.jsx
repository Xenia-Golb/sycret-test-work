import { useNavigate } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";


function CatalogPage() {
    const navigate = useNavigate();
    return (<>
        <Catalog
            onClick={() => navigate('/contacts')}
        />
    </>);
}

export default CatalogPage;