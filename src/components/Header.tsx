import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-[#FF6B35] text-white p-4 flex items-center ">
            <Image src="/pawsome-advice-logo.png" alt="Logo" width={200} height={48} />
        </header>
    );
}