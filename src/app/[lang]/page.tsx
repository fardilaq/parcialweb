import ChangeLangSelect from '@/components/ChangelangSelect'
import { getDictionary} from './dictionaries'

 
export default async function Page() {
  const dict = await getDictionary()

  return (
    <div className="flex items-center justify-between">
      <h1>{dict.welcome} {dict.profile}</h1>
      <ChangeLangSelect />
    </div>
  )
}