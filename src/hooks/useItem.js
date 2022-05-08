import { useEffect, useState } from "react";

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://stormy-depths-75418.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [items])

    return [items, setItems]

}
export default useItem;