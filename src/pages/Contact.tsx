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
            <div>
              <h3 className="text-lg font-semibold">Whatsapp</h3>
              <span className="text-gray-600">089510465800</span>
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <span className="text-gray-600">kevinmpandoh@gmail.com</span>
            </div>
          </div>
          <div className="flex items-start">
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
