import React, {useEffect, useState} from 'react'

const Proa5Test = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const apirequest=()=>{
        fetch(url).then((response)=>{
            if(!response.ok){
                throw new Error("Something went wrong");
                return response.json([])
            }
            .then((data)=>{
                setData(data);
                setLoading(false);
            }).catch((error)=>{
                console.log(error);
                setError(error)
                setLoading(false);
            })

        })
    }

    useEffect(() => {
        apirequest();
    },[])
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <h1>Data </h1>
        <ul>
            {
                data.map((item)=>(
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul>
    )
}
export default Proa5Test
