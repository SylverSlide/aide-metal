"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle, Phone } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Veuillez saisir votre nom"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .regex(/^[\d\s+()-]+$/, "Numéro de téléphone invalide"),
  email: z.string().email("Email invalide"),
  city: z.string().min(2, "Veuillez indiquer votre ville"),
  serviceType: z.string().min(1, "Veuillez choisir un service"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="mb-2 text-xl font-extrabold text-primary-950">
          Demande envoyée !
        </h3>
        <p className="mb-6 text-gray-600">
          Nous vous recontactons très rapidement.
        </p>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center gap-2 text-lg font-bold text-accent-600 hover:text-accent-700"
        >
          <Phone className="h-5 w-5" />
          Ou appelez-nous : {siteConfig.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Nom
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom *"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Votre téléphone *"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Votre email *"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="city" className="sr-only">
            Ville
          </label>
          <input
            id="city"
            type="text"
            placeholder="Votre ville *"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            {...register("city")}
          />
          {errors.city && (
            <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="sr-only">
          Type de besoin
        </label>
        <select
          id="serviceType"
          className="min-h-[48px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          {...register("serviceType")}
          defaultValue=""
        >
          <option value="" disabled>
            Type de besoin *
          </option>
          <option value="installation">Installation</option>
          <option value="depannage">Dépannage urgent</option>
          <option value="reparation">Réparation</option>
          <option value="motorisation">Motorisation</option>
          <option value="autre">Autre</option>
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-xs text-red-500">
            {errors.serviceType.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Décrivez brièvement votre besoin (facultatif)"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 text-[15px] font-bold text-white shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-600 hover:shadow-xl active:scale-[0.98] disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
        {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
      </button>

      <p className="text-center text-xs text-gray-400">
        Réponse rapide garantie · Vos données restent confidentielles
      </p>
    </form>
  );
}
