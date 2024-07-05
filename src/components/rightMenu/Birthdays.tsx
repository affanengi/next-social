import Link from "next/link"


const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
         <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Birthdays</span>
            <Link href="/" className="text-blue-500 text-xs">See all</Link>
        </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUFNr42jG40sv3MdyNiwmjUE-wgvR8YkPJg&s" alt="" width={40} height={40} className="w-10  h-10 rounded-full object-cover" />
                    <span className="font-semibold">Waleed Dastagir </span>
                </div>
                <div className="flex gap-3 justify-end">
                  <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
                </div>
        </div>
        {/* UPCOMING */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <img src="/gift.png" alt="" width={24} height={24}  />
        <Link href="/" className="flex flex-col gap-1 text-xs" >
        <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
        <span className="text-gray-500">See other 16 have upcoming birthdays</span>
        </Link>
        </div>
    </div>
  )
}

export default Birthdays