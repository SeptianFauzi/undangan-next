import Head from 'next/head'
import Image from 'next/image'
import { useCountdown } from '../component/useCountDown'

export default function CustomError() {
    const [days, hours, minutes, seconds] = useCountdown(1678611600000)
    return (
        <>
            <Head>
                <meta name="description" content="Pernikahan Septian Fauzi & Siti Nanda Nurdiani" />
                <link rel="icon" href="/favicon.ico" />
                <title>Pernikahan &mdash; Septian Fauzi & Siti Nanda Nurdiani</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <div id="page" style={{ zIndex: 0 }}>
                    <div className="fixed-bottom position-fixed rounded bg-white shadow-lg w-75 px-0 py-3 mx-auto d-flex justify-content-evenly"
                        style={{ zIndex: 1000000000, bottom: "5vh" }}>
                        <a href="#beranda"><i className="fa fa-home fa-lg hove"></i></a>
                        <a href="#fh5co-couple"><i className="fa fa-user fa-lg"></i></a>
                        <a href="#acara"><i className="fa fa-calendar fa-lg"></i></a>
                        <a href="#gallery"><i className="fa fa-image fa-lg"></i></a>
                    </div>
                    <header id="fh5co-header" className="fh5co-cover bg-1" role="banner">
                        <div className="overlay"></div>
                        <div className="container position-relative" id="beranda">
                            <div className="row ">
                                <div className="col-lg-8 fh5co-section offset-lg-2 col-md-12 text-center">
                                    <div className='great-vibes'>
                                        <h1 className='display-2 text-white'>Siti Nanda Nurdiani</h1>
                                        <h1 className='display-2 text-white'>&amp;</h1>
                                        <h1 className='display-2 text-white'>Septian Fauzi</h1>
                                        <p className="text-white h3">Minggu, 12 Maret 2023</p>
                                        <h6 className="text-white">Save The Date</h6>
                                        <div id='countdown' className='py-4'>
                                            <div className='d-flex justify-content-center h-100'>
                                                <div className='rounded-circle bg-primary p-4 text-white mx-2' style={{ animation: "pulse 1s ease infinite" }}>
                                                    <p className='m-0 p-0 text-white h6'>{days}</p>
                                                    <p className='m-0 p-0 text-white'>Hari</p>
                                                </div>
                                                <div className='rounded-circle bg-primary p-4 text-white mx-2' style={{ animation: "pulse 1s ease infinite" }}>
                                                    <p className='m-0 p-0 text-white h6'>{hours}</p>
                                                    <p className='m-0 p-0 text-white'>Jam</p>
                                                </div>
                                                <div className='rounded-circle bg-primary p-4 text-white mx-2' style={{ animation: "pulse 1s ease infinite" }}>
                                                    <p className='m-0 p-0 text-white h6'>{minutes}</p>
                                                    <p className='m-0 p-0 text-white'>Menit</p>
                                                </div>
                                                <div className='rounded-circle bg-primary p-4 text-white mx-2' style={{ animation: "pulse 1s ease infinite" }}>
                                                    <p className='m-0 p-0 text-white h6'>{seconds}</p>
                                                    <p className='m-0 p-0 text-white'>Detik</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="fh5co-couple">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 fh5co-heading offset-lg-2 text-center animate-box">
                                    <h2 className="text-main h4">Assalamualaikum Wr. Wb.</h2>
                                    <p>Tanpa mengurangi rasa hormat. Kami bermaksud mengundang Bapak/Ibu/Saudara/i
                                        untuk hadir
                                        dalam acara
                                        pernikahan kami</p>
                                </div>
                            </div>
                            <div className="d-flex animate-box">
                                <div className="couple-half">
                                    <div className="groom">
                                        <Image src="https://septianfauzi.com/assets/undangan/images/Avatar_Fauzi.png" alt="groom" width={200} height={200}
                                            className="img-responsive" />
                                    </div>
                                    <div className="desc-groom">
                                        <h5 className="great-vibes text-main">Septian Fauzi</h5>
                                        <p>Putra Bungsu dari Bapak Maman Nurzaman & Ibu Nyai Nuryati</p>
                                    </div>
                                </div>
                                <div className="heart text-center my-5 py-auto rounded-circle"><i className="fa-heart fa-solid"></i></div>
                                <div className="couple-half">
                                    <div className="bride">
                                        <Image src="https://septianfauzi.com/assets/undangan/images/Avatar_Nanda.png" alt="groom" width={200} height={200}
                                            className="img-responsive" />
                                    </div>
                                    <div className="desc-bride">
                                        <h5 className="great-vibes text-main">Siti Nanda Nurdiani</h5>
                                        <p>Putri Bungsu dari Bapak Ujang Syafrudin & Ibu (Almh) Enung Nurhayati
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="fh5co-event" className="fh5co-bg bg-1">
                        <div className="overlay"></div>
                        <div className="container position-relative" id="acara">
                            <div className="row">
                                <div className="col-8 offset-2 text-center fh5co-heading animate-box">
                                    <h2>Acara Pernikahan</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 flex-row justify-content-center">
                                    <div className="animate-box h-100 w-100 text-white border-white border rounded p-4">
                                        <p className="text-center h5 mb-sm-1 text-white">Akad & Resepsi</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-6 col-md-6 col-sm-12 my-1">
                                                <div className="col-12 d-flex my-2 align-items-center">
                                                    <i className="fa-clock fa-solid icon-size"></i>
                                                    <p className="m-0 mx-3 text-white">09:00 s/d selesai</p>
                                                </div>
                                                <div className="col-lg-12 d-flex my-2 align-items-center">
                                                    <i className="fa-solid fa-calendar-alt icon-size"></i>
                                                    <p className="m-0 mx-3 text-white">Minggu, 12 Maret 2023</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 my-1 col-md-6 col-sm-12 d-flex">
                                                <i className="fa-solid fa-location-pin icon-size"></i>
                                                <div>
                                                    <p className="mb-0 mx-3 text-white">Kediaman Mempelai Wanita</p>
                                                    <p className="mb-0 mx-3 text-white">Kp. Sirnasari RT. 003 RW. 002 Desa Gunung Sari
                                                        Kecamatan
                                                        Pamijahan Kab. Bogor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mx-auto text-center d-flex flex-column align-items-center" style={{ zIndex: 1 }}>
                                    <iframe className='w-100 rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.923667450192!2d106.65097114968135!3d-6.656382995163365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d1ecfa70dbe3%3A0xb0e2b399bd6513f0!2sUjang%20Syafrudin!5e0!3m2!1sen!2sid!4v1678012283124!5m2!1sen!2sid" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    <a className="btn btn-primary mt-3 btn-block text-white" href="https://goo.gl/maps/8P8H39obT5ddakfi7" role="button">Lihat
                                        Lokasi</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="fh5co-couple-story">
                        <div className="container" id="gallery">
                            <div className="row">
                                <div className="col-8 offset-2 text-center fh5co-heading animate-box">
                                    <h2>Gallery</h2>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 my-1 px-1">
                                    <Image className="rounded img-fluid"
                                        src="https://septianfauzi.com/assets/undangan/images/GallleryVertical10.jpg" alt='No Image' width={1000} height={1000} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 my-1 d-flex flex-column  px-1 justify-content-center" >
                                    <Image className="rounded img-fluid my-1"
                                        src="https://septianfauzi.com/assets/undangan/images/GallleryHorizontal1.jpg" alt='No Image' width={1000} height={1000} />
                                    <Image className="rounded img-fluid my-1"
                                        src="https://septianfauzi.com/assets/undangan/images/GallleryHorizontal2.jpg" alt='No Image' width={1000} height={1000} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 my-1 px-1">
                                    <Image className="rounded img-fluid"
                                        src="https://septianfauzi.com/assets/undangan/images/GallleryVertical2.jpg" alt='No Image' width={1000} height={1000} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dompet_digital">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center fh5co-heading animate-box">
                                    <h2>Dompet Digital</h2>
                                    <p>Bapak/ibu/saudara/i yang ingin memberikan tanda kasih dapat dikirimkan melalui :
                                    </p>
                                </div>
                                <div
                                    className="p-3 col-lg-4 col-md-4 py-sm-5 col-sm-12 offset-sm-0 h-100 d-flex flex-column align-items-center justify-content-between">
                                    <Image className="img-responsive img-fluid" width="200" height="100"
                                        src="https://septianfauzi.com/assets/undangan/images/logoBCA.png" alt="" />
                                    <div className="border w-75 my-4" style={{ borderColor: "#9DC183" }}>
                                    </div>
                                    <p className='h2'>8720491461</p>
                                    <p>Septian Fauzi</p>
                                    <button className="btn btn-primary text-white" onClick={() => { navigator.clipboard.writeText("8720491461").then(() => { alert("Berhasil Di Copy") }) }}><i className="fa fa-copy me-2"></i>Salin Nomor
                                        Rekening</button>
                                </div>
                                <div
                                    className="p-3 col-lg-4 col-md-4 py-sm-5 col-sm-12 offset-sm-0 d-flex h-100 flex-column align-items-center justify-content-between">
                                    <Image className="img-responsive img-fluid mb-2" width="200" height="100"
                                        src="https://septianfauzi.com/assets/undangan/images/LogoMandiri.png" alt="" />
                                    <div className="border w-75 my-4" style={{ borderColor: "#9DC183" }}>
                                    </div>
                                    <p className='h2'>1330014432744</p>
                                    <p>Siti Nanda Nurdiani</p>
                                    <button className="btn btn-primary text-white" onClick={() => { navigator.clipboard.writeText("1330014432744").then(() => { alert("Berhasil Di Copy") }) }} > <i className="fa fa-copy me-2"></i>Salin Nomor Rekening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fh5co-bg bg-1" style={{ height: "300px" }}>
                        <div className="overlay"></div>
                        <div className="container position-relative" style={{ paddingTop: 50 }}>
                            <div className="row d-flex flex-column justify-content-between align-items-between">
                                <p className='text-white text-center'>Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima Kasih.
                                </p>
                                <h1 className=" sacrameto text-white text-center">Wassalamu’alaikum Wr. Wb.</h1>
                                <small className="block text-center text-white" style={{ marginTop: 100 }}>Septian Fauzi Made With <i className="fa fa-heart"></i> &copy;2023</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <audio autoPlay id="audio">
                        <source src="https://septianfauzi.com/assets/undangan/music/AThousandYear.mp3" type="audio/mpeg" />
                    </audio>
                </div>
            </div >
        </>
    )
}
