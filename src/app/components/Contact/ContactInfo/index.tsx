import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section className="dark:bg-darkmode">
        <div className="container mx-auto px-4">
          <div className="flex md:flex-row flex-col items-stretch justify-center sm:gap-28 gap-8">
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-15 h-15 flex items-center justify-center rounded-full">
                <i className="bg-[url('/images/kontak-page/email.svg')] bg-no-repeat bg-contain w-8 h-8 inline-block"></i>
              </div>
              <div>
                <span className="text-midnight_text dark:text-white text-xl font-bold">
                  Email Kami
                </span>
                <p className="text-black/50 dark:text-white/50 font-normal text-lg max-w-80 pt-3 pb-7">
                  Hubungi kami kapan saja melalui email resmi di: <br />
                  <span className="text-primary font-semibold">kontak@pameutingan.desa.id</span>
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-15 h-15 flex items-center justify-center rounded-full">
                <i className="bg-[url('/images/kontak-page/career.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="">
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Alamat Kantor
                  </span>
                  <p className="text-black/50 dark:text-white/50 font-normal text-lg max-w-80 pt-3 pb-7">
                    Jl. Desa Pameutingan, Kec. Cipatujah, <br />
                    Kab. Tasikmalaya, Jawa Barat 46189
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-11 md:pb-6.75 pb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5186060485994!2d108.01234567890123!3d-7.754321098765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e66012345678901%3A0x1234567890abcdef!2sKantor%20Kepala%20Desa%20Pameutingan!5e0!3m2!1sid!2sid!4v1715676641521!5m2!1sid!2sid"
              width="1114"
              height="477"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>
        <div className="border-b border-solid border-border dark:border-darkborder"></div>
      </section>
    </>
  );
};

export default ContactInfo;
