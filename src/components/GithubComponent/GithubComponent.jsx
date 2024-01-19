import React, { useEffect, useState } from 'react'

function GithubComponent() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/nomaannn')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);


    return (
        <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
            Github Followers : {data.followers}
            <div className='d-flex justify-center w-100'>
                <img src={data.avatar_url} alt='git profile' className='rounded-full w-50 mt-6 ' width={300} />
            </div>
        </div>
    )
}

export default GithubComponent