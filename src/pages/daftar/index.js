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
    }, [])

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
                                    <td>https://undangan.septianfauzi.com/{item.ID}</td>
                                    <td className='d-flex gap-3 align-items-center'>
                                        <button onClick={() => navigator.clipboard.writeText("http://undangan.septianfauzi.com/" + item.ID).then(() => alert("Berhasil Di Copy"))} class="btn btn-primary text-white"><i className="fa fa-copy"></i></button>
                                        <a href={`whatsapp://send?text=` + encodeURIComponent(`
السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ

Dengan memohon rahmat Allah SWT, perkenankan kami mengundang Bapak / Ibu / Saudara / i  untuk menghadiri pernikahan kami.
                                        
*Siti Nanda Nurdiani & Septian Fauzi*
                                        
*Akad*
Akan dilaksanakan pada :
Hari, Tanggal : Minggu, 12 Maret 2023
Jam : 09:00
Lokasi : Kp. Sirnasari RT. 003 RW. 002 Desa Gunung Sari Kecamatan Pamijahan Kabupaten Bogor

*Resepsi*
Akan dilaksanakan pada :
Hari, Tanggal : Minggu, 12 Maret 2023
Jam : 13:00 s/d selesai
Lokasi : Kp. Sirnasari RT. 003 RW. 002 Desa Gunung Sari Kecamatan Pamijahan Kabupaten Bogor

Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :

${`https://undangan.septianfauzi.com/` + item.ID}

Merupakan suatu kebahagiaan bagi kami apabila Bapak /Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Terima kasih banyak atas perhatiannya

وَ السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ`)}><i class="fa-solid fa-paper-plane " aria-hidden="true"></i></a>
                                    </td>

                                </tr >
                            </>)}

                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}
