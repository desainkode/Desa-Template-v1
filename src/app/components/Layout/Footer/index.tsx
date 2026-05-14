"use client"
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer: FC = () => {
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/service')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setServices(data.ServicesData || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <footer className="bg-Dark-primary dark:bg-darklight py-17 pb-6">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-12 sm:gap-1.875 gap-5">
          <div className="lg:col-span-4 col-span-12">
            <div className="md:pe-7.5">
              <Link href="/">
                <Image
                  src="/images/logo/logo-desa.svg"
                  alt="Logo Desa Pameutingan"
                  width={60}
                  height={60}
                />
              </Link>
              <p className="mb-0 font-normal text-lg text-white/50 pt-2.188 pb-1.875 leading-relaxed">
                Portal Informasi Resmi Pemerintah Desa Pameutingan. Mewujudkan pelayanan publik yang prima, transparan, dan akuntabel bagi seluruh warga.
              </p>
              <p className="text-lg font-normal text-white mb-0 italic">
                Jl. Desa Pameutingan, Kec. Cipatujah
              </p>
              <p className="text-lg font-normal text-white mb-0 italic">
                Kab. Tasikmalaya, Jawa Barat 46189
              </p>
              <p className="text-white/50 text-lg font-normal mb-0 pt-4">
                Hubungi Kami:{" "}
                <Link href="tel:08123456789" className="text-primary hover:text-orange-600">
                  +62 812-3456-789
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Layanan
            </h4>
            <ul>
              <li className="pb-1.563">
                <Link href="/layanan" className="text-lg font-normal text-white/50 hover:text-primary">
                  Administrasi KTP
                </Link>
              </li>
              <li className="pb-1.563">
                <Link href="/layanan" className="text-lg font-normal text-white/50 hover:text-primary">
                  Kartu Keluarga
                </Link>
              </li>
              <li className="pb-1.563">
                <Link href="/layanan" className="text-lg font-normal text-white/50 hover:text-primary">
                  Surat Keterangan
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Navigasi
            </h4>
            <ul>
              <li className="pb-1.563">
                <Link
                  href="/profil"
                  className="text-lg font-normal text-white/50 hover:text-primary"
                >
                  Profil Desa
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  href="/potensi"
                  className="text-lg font-normal text-white/50 hover:text-primary"
                >
                  Potensi Desa
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  href="/berita"
                  className="text-lg font-normal text-white/50 hover:text-primary"
                >
                  Berita Desa
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  href="/kontak"
                  className="text-lg font-normal text-white/50 hover:text-primary"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-7 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium sm:mb-2.375 mb-6">
              Akses Cepat
            </h4>
            <p className="text-lg text-white/50 font-normal mb-4">
              Dapatkan bantuan layanan mandiri melalui portal warga kami.
            </p>
            <div className="flex sm:flex-nowrap flex-wrap items-center gap-2">
              <Link
                href="/layanan-masyarakat/signin"
                className="py-4 px-8 bg-primary text-white hover:bg-orange-600 rounded-xl font-medium duration-500 sm:w-fit w-full text-center shadow-lg shadow-primary/20"
              >
                Masuk ke Portal Warga
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-6 items-center justify-between sm:pt-17 pt-10">
          <p className="text-lg font-normal text-white/50 ">
            &copy; 2026 - Pemerintah Desa Pameutingan. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 items-center">
            <Link
              href="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="grommet-icons:facebook-option"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              href="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="mage:twitter"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              href="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="jam:google-plus"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              href="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="typcn:social-linkedin"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
