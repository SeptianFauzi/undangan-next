import Head from 'next/head'
import { useState } from 'react'


export default function Tambah() {

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const postData = async () => {
        try {
            const data = await fetch('https://api-untukmu.septianfauzi.com/api/undangan', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nama: name }),
            });
            const json = await data.json();
            if (json.data) {
                setUrl("http://undangan.septianfauzi.com/" + json.data.ID)
            } else {
                setUrl("Penyimpanan Gagal")
            }
        } catch (error) {
            setUrl("Penyimpanan Gagal, Data Sudah Ada")
        }


    }

    return (
        <>
            <Head>
                <meta name="description" content="Pernikahan Septian Fauzi & Siti Nanda Nurdiani" />
                <link rel="icon" href="/favicon.ico" />
                <title>Pernikahan &mdash; Septian Fauzi & Siti Nanda Nurdiani</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="w-100 container d-flex justify-content-center text-center align-items-center" style={{ height: "100vh" }}>
                <div className="d-flex flex-column justify-content-center align-items gap-3 w-50">
                    <p className='h3'>Masukan Nama Undangan</p>
                    <input type="text" class="form-control w-100" onChange={(e) => setName(e.target.value)} />
                    <button type="submit" onClick={() => postData()} class="btn btn-primary text-white">Generate URL</button>
                    <div>
                        {url && <>
                            <div className="d-lg-flex flex-sm-column justify-content-between align-items-center">
                                <p className='m-0'>URL : {url}</p>
                                <button onClick={() => navigator.clipboard.writeText(`
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

${url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak /Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Terima kasih banyak atas perhatiannya

وَ السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ`).then(() => alert("Berhasil Di Copy"))} class="btn btn-primary text-white me-3"><i className="fa fa-copy"></i></button>
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

${url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak /Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Terima kasih banyak atas perhatiannya

وَ السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ`)}><i class="fa-solid fa-paper-plane " aria-hidden="true"></i></a>
                            </div>
                        </>}
                    </div>

                </div>
            </div >
        </>
    )
}
