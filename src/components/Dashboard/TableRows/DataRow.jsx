import useAuth from '../../../hooks/useAuth';
import Loader from '../../Shared/Loader';
import { getreqInfo } from '../../../api/booking';
import { useQuery } from '@tanstack/react-query';

const MealDataRow = () => {
    const { loading } = useAuth();
    const { data: reqInfo = [], isLoading } = useQuery({
        queryKey: ['reqIfo'],
        enabled: !loading,
        queryFn: async () => await getreqInfo(),
    });
    if (isLoading) return <Loader />;
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{reqInfo[0]?.meal}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{reqInfo[0]?.likes}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{reqInfo[0]?.reviews}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{reqInfo[0]?.status}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Cancel</span>
                </span>
            </td>
        </tr>
    )
}

export default MealDataRow;