import React from "react";

const About: React.FC = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center p-6 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Tentang Saya</h2>
        <p className="text-gray-500 mt-2">Perkenalan saya</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start max-w-5xl  mx-auto">
        <div className="md:w-1/3 mb-6 md:mb-0 ">
          <img
            src="/about.jpg"
            alt="Foto Tentang Saya"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/3 md:ml-10 text-center  md:text-left">
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            Mahasiswa semester 6 Jurusan Teknik Informatika di Universitas
            Negeri Manado yang memiliki ketertarikan dan minat yang kuat pada
            pengembangan web dan teknologi. Memiliki kemampuan dalam hal
            manajemen waktu, mampu bekerja dalam tim, teliti, analitis dan suka
            belajar hal baru serta pengalaman dalam proyek pengembangan web.
            Bersemangat untuk belajar dan berkontribusi dalam program MSIB
            Kampus Merdeka untuk mengembangkan keterampilan dan pengetahuan di
            dunia profesional.
          </p>
          <a
            download={"CV_Kevin.pdf"}
            href="assets/cv/CV_Kevin.pdf"
            className="bg-purple-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-600 flex items-center justify-center"
          >
            Unduh CV
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12.75L12 20.25l-7.5-7.5M12 3v17.25"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
