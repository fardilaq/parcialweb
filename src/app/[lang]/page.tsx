import ChangeLangSelect from '@/components/ChangelangSelect'
import { getDictionary } from './dictionaries'
import ListofCards from '@/components/ListofCards'
import RandomButton from '@/components/RandomButton'

export default async function Page() {
  const dict = await getDictionary()

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold justify-between text-black flex">{dict.ListadoRazas} <RandomButton /> <ChangeLangSelect es={dict.spanish} en={dict.english} /></h1>
      

      <div className="mt-4">
        <ListofCards />
      </div>
    </div>
  )
}