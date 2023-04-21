

const Userlist = () => {
    return (
        <div>
            <table className="min-w-full table-auto">
                <thead className="justify-between">
                    <tr className="bg-gray-800">
                        <th className="px-16 py-2">
                            <span className="text-gray-300">Name</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-300">Carts</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-300">Date</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-300">Email</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-300">Phone number</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    <tr className="bg-white border-4 border-gray-200">
                        <td>
                            <span className="text-center ml-2 font-semibold">Tran Hung Cuong</span>
                        </td>
                        <td className="px-16 py-2">
                            <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                                Open Link
                            </button>
                        </td>
                        <td className="px-16 py-2">
                            <span>05/06/2020</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>cuong@gmail.com</span>
                        </td>

                        <td className="px-16 py-2">
                            <span className="px-16 py-2">
                                0123456789
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Userlist;