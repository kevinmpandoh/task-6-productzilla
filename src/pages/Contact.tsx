import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:kevinmpandoh@gmail.com?subject=Pesan dari ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(`${formData.message}`)}`;

    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-4" id="contact">
      <h2 className="text-3xl font-bold text-center mb-4">Hubungi Saya</h2>

      <div className="grid gap-8 max-w-4xl mx-auto lg:grid-cols-2">
        <div>
          <div className="mb-6 flex items-start">
            <i className="uil uil-phone text-2xl text-blue-500 mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold">Whatsapp</h3>
              <span className="text-gray-600">089510465800</span>
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <span className="text-gray-600">kevinmpandoh@gmail.com</span>
            </div>
          </div>
          <div className="flex items-start">
            <i className="uil uil-map-marker text-2xl text-blue-500 mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold">Lokasi</h3>
              <span className="text-gray-600">Indonesia - Manado</span>
            </div>
          </div>
        </div>

        {/* Formulir Kontak */}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pesan
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              rows={5}
              placeholder="Tulis pesan Anda"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
