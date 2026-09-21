'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ChangeLangButton() {
  const { lang } = useParams<{ lang: string }>();
  const router = useRouter();

  return (
    <select
    className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
      id="opciones"
      value={lang}
      onChange={(e) => router.push(`/${e.target.value}`)}
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
}
