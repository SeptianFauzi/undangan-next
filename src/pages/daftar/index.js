import Head from 'next/head'
import { useState, useEffect } from 'react'


export default function Daftar() {

    const [list, setList] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://api-untukmu.septianfauzi.com/api/undangan');
            const json = await data.json();
            if (json.data.length === 0) {
                router.push("error/404")
            } else {
                setList(json.data)
            }
        }
        fetchData();
    }, [list])

    return (
        <>
            <Head>
                <meta name="description" content="Pernikahan Septian Fauzi & Siti Nanda Nurdiani" />
                <link rel="icon" href="/favicon.ico" />
                <title>Pernikahan &mdash; Septian Fauzi & Siti Nanda Nurdiani</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="w-100 container d-flex justify-content-center text-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items w-75">
                    <p className='h3'>Daftar Undangan</p>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">ID</th>
                                <th scope="col">Nama</th>
                                <th scope="col">URL</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list && list.map((item, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td scope="row">{item.ID}</td>
                                    <td>{item.Nama}</td>
                                    <td>http://undangan.septianfauzi.com/{item.ID}</td>
                                    <td>                                <button onClick={() => navigator.clipboard.writeText("http://undangan.septianfauzi.com/" + item.ID).then(() => alert("Berhasil Di Copy"))} class="btn btn-primary text-white"><i className="fa fa-copy"></i></button></td>
                                </tr>
                            </>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
