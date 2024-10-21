"use client";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_3i4433w",
        "template_g0ycahd",
        {
          name: data.LastName,
          firstname: data.FirstName,
          mail: data.Email,
          objet: data.Object,
          tel: data.Tel,
          message: data.Message,
        },
        "d9CgjqeFTmXbwM4Ig",
      );
      alert("Votre message a été envoyé avec succès!");
      reset();
    } catch (error) {
      console.error("Échec de l'envoi...", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <form
      id="contact"
      className="mx-20 pt-32"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="mb-2 text-center text-gray-500 md:text-3xl lg:text-4xl">
        Contact :
      </p>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="group relative z-0 mb-5 w-full">
          <input
            {...register("LastName", { required: true })}
            type="text"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          {errors.LastName && <span>Cet champ est requis</span>}
          <label
            htmlFor="LastName"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Nom :
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            {...register("FirstName", { required: true })}
            type="text"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          {errors.FirstName && <span>Cet champ est requis</span>}
          <label
            htmlFor="FirstName"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Prénom :
          </label>
        </div>
      </div>
      <div className="group relative z-0 mb-5 w-full">
        <input
          {...register("Email", { required: true })}
          type="email"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        {errors.Email && <span>Cet champ est requis</span>}
        <label
          htmlFor="email"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
        >
          Email :
        </label>
      </div>
      <div className="group relative z-0 mb-5 w-full">
        <input
          {...register("Object", { required: true })}
          type="text"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        {errors.Object && <span>Cet champ est requis</span>}
        <label
          htmlFor="Object"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
        >
          Objet :
        </label>
      </div>

      <div className="group relative z-0 mb-5 w-full">
        <input
          {...register("Tel")}
          type="tel"
          pattern="[0-9]{10}"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="Tel"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
        >
          N° de téléphone :
        </label>
      </div>

      <textarea
        {...register("Message", { required: true })}
        rows="4"
        className="mb-2 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Vôtre message :"
      />
      {errors.Message && <span>Cet champ est requis</span>}

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
      >
        Envoyer
      </button>
    </form>
  );
}
