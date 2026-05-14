import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/kontak", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-blue py-24">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-4 border-b border-solid border-white/30 pb-11">
            <div>
              <h2 className="text-white text-4xl leading-tight font-bold">
                Kantor Kepala Desa
              </h2>
            </div>
            <div>
              <p className="text-lg font-normal leading-10 text-white/50">
                Jl. Desa Pameutingan, Kec. Cipatujah, Kab. Tasikmalaya, Jawa Barat 46189
              </p>
            </div>
            <div>
              <Link
                href="mailto:kontak@pameutingan.desa.id"
                className="text-lg text-white font-medium underline hover:text-white/80"
              >
                kontak@pameutingan.desa.id
              </Link>
              <Link
                href="tel:08123456789"
                className="text-lg text-white/80 flex items-center gap-2 hover:text-white w-fit"
              >
                <span className="text-white/40">Telp:</span>+62 812-3456-789
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-4 pt-12">
            <div>
              <h2 className="text-white text-3xl leading-tight font-bold">
                Jam Operasional
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/50 font-normal leading-10">
                Senin - Jumat: 08.00 - 15.30 WIB <br />
                Sabtu - Minggu: Tutup
              </p>
            </div>
            <div>
              <p className="text-lg text-white/50 font-normal leading-relaxed">
                Kami melayani berbagai pengurusan administrasi kependudukan dan layanan publik lainnya sesuai jam kerja.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
