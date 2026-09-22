"use client";

import { usePathname, useRouter } from "next/navigation";

type Props = {es: string; en: string };

export default function ChangeLangSelect({ es, en }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const actual = pathname.split("/")[1];

  function cambiarIdioma(nuevo: string) {
    const segmentos = pathname.split("/");
    segmentos[1] = nuevo;
    router.push(segmentos.join("/"));
  }

  return (
    <label className="flex items-center gap-2">
      <select
        className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={actual}
        onChange={(e) => cambiarIdioma(e.target.value)}
      >
        <option value="es">{es}</option>
        <option value="en">{en}</option>
      </select>
    </label>
  );
}