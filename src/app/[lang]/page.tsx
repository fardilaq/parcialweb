import ChangeLangSelect from '@/components/ChangelangSelect'
import { getDictionary } from './dictionaries'
import ListofCards from '@/components/ListofCards'

export default async function Page() {
  const dict = await getDictionary()

  return (
    <div className="flex flex-col items-center">
      <h1>{dict.welcome} {dict.profile}</h1>
      <ChangeLangSelect label={dict.language} es={dict.spanish} en={dict.english} />

      <div className="mt-4">
        <ListofCards />
      </div>
    </div>
  )
}