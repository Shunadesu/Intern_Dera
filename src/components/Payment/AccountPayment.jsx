import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import icons from '../../Ulities/icons';

const AccountPayment = () => {

  const schema = yup.object().shape({
    name: yup.string().min(1).max(32),
    phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    city: yup.string().required("Please select a city"),
    district: yup.string().required('Please select a district'),
    ward: yup.string().required('Please enter the ward'),
    addressDetail: yup.string().required('Please enter the address detail'),
    addressType: yup.string(),
    paymentMethod: yup.string(),
  });

  const sunnycheck = localStorage.getItem('username');
  const [inputValue, setInputValue] = useState(sunnycheck);
  const [selectedAddressType, setSelectedAddressType] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(
    {
      mode: 'onChange',
      resolver: yupResolver(schema)
    }
  )


  const onSubmitHandler = (data) => {
    console.log({ data });
    localStorage.setItem('userinformation', data.name)
    localStorage.setItem('address', `${data.addressDetail} street, ward ${data.ward} ,district ${data.district} ,${data.city}` )
    reset();
  };

const { 
  FaMoneyBillWave,
  BsBank2,
  FaRegCheckCircle,
  FaRegCircle,
  
} = icons

  return (
    <div className='flex-1 md-max-3:w-full p-8 bg-white rounded-2xl flex flex-col gap-4'>
      <div className='font-heading_1 text-[28px] md-max-3:text-[24px] font-bold'>
        Account Information
      </div>
      <form 
        className='flex flex-col gap-3 w-full'
        onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='flex justify-center flex-col gap-2'>
        <label htmlFor="name" className='font-bold text-[#666666]'>Username</label>
        <input
          id="name"
          className='px-4 py-2 rounded-lg border border-gray-300'
          type="text" name="name" autoComplete="off" placeholder={sunnycheck}        
          {...register("name", { required: true, maxLength: 30 })}
          value={inputValue}
        />

        <p className='capitalize text-red-600' >{errors.name?.message}</p>
        </div>
      
        <div className='flex justify-center flex-col gap-2'>
        <label htmlFor="email" className='font-bold text-[#666666]'>Phone</label>
          <input
            id="phone"
            className='px-4 py-2 rounded-lg border border-gray-300'
            type="number" name="phone"  autoComplete="off" 
            {...register("phone", { required: true, maxLength: 30 })}
          />
            <p className='capitalize text-red-600'>{errors.phone?.message}</p>
        </div>

        <div className='flex justify-center flex-col gap-2'>
          <label htmlFor='city' className='font-bold text-[#666666]'>
            Select City
          </label>
          <select
            id='city'
            className='px-4 py-2 rounded-lg border border-gray-300'
            {...register('city', { required: true })}
          >
            <option value=''>city</option>
            <option value='city1'>HCM City </option>
            <option value='city2'>HN City </option>
            <option value='city3'>Sunny City </option>
          </select>
          <p className='capitalize text-red-600'>{errors.city?.message}</p>
        </div>

        <div className='flex justify-center flex-col gap-2'>
          <label htmlFor='district' className='font-bold text-[#666666]'>
            Select District
          </label>
          <select
            id='district'
            className='px-4 py-2 rounded-lg border border-gray-300'
            {...register('district', { required: true })}
          >
            <option value=''>District</option>
            <option value='district1'>District 1</option>
            <option value='district2'>District 2</option>
            <option value='district3'>District 3</option>
          </select>
          <p className='capitalize text-red-600'>{errors.district?.message}</p>
        </div>
        <div className='flex justify-center flex-col gap-2'>
          <label htmlFor='ward' className='font-bold text-[#666666]'>
            Ward
          </label>
          <input
            id='ward'
            className='px-4 py-2 rounded-lg border border-gray-300'
            type='text'
            name='ward'
            autoComplete='off'
            placeholder='Ward'
            {...register('ward', { required: true })}
          />
          <p className='capitalize text-red-600'>{errors.ward?.message}</p>
        </div>
        <div className='flex justify-center flex-col gap-2'>
          <label htmlFor='addressDetail' className='font-bold text-[#666666]'>
            Address Detail
          </label>
          <input
            id='addressDetail'
            className='px-4 py-2 rounded-lg border border-gray-300'
            type='text'
            name='addressDetail'
            autoComplete='off'
            placeholder='Enter your address detail'
            {...register('addressDetail', { required: true })}
          />
          <p className='capitalize text-red-600'>{errors.addressDetail?.message}</p>
        </div>
        <div className='flex justify-start gap-4'>
          <button
              className={`px-4 py-2 rounded-xl font-semibold border ${
                selectedAddressType === 'company' ? 'bg-[#658C4A] text-white border-white' : 'bg-[#f0f0f0] text-black border-black'
              }`}
              type='button'
              onClick={() => setSelectedAddressType('company')}
            >
              Company
          </button>
          <button
            className={`px-4 py-2 rounded-xl font-semibold border ${
              selectedAddressType === 'home' ? 'bg-[#658C4A] text-white border-white' : 'bg-[#f0f0f0] text-black border-black'
            }`}
            type='button'
            onClick={() => setSelectedAddressType('home')}
          >
            Home
          </button>

          <input
            type="hidden"
            name="addressType"
            value={selectedAddressType}
            {...register('addressType', { required: true })}
          />
        </div>
        <div className='flex flex-col justify-start gap-4 my-12'>
          <div className='font-heading_1 text-[28px] font-bold'>
            Payment Method
          </div>
          <button
            className={`px-6 py-4 rounded-xl font-semibold border text-start  ${
              selectedPaymentMethod === 'creditCard' ? 'bg-[#658C4A] text-white border-white' : 'bg-[#f0f0f0] text-black border-black'
            }`}
            type='button'
            onClick={() => setSelectedPaymentMethod('creditCard')}
          >
            <div className='flex gap-3 items-center'>
            {
              selectedPaymentMethod === 'creditCard' ? <FaRegCheckCircle size={16}/> : <FaRegCircle size={16}/>
            }
              <FaMoneyBillWave size={20}/>
              COD Payment
            </div>
          </button>
          <button
            className={`px-6 py-4 rounded-lg font-semibold border text-start ${
              selectedPaymentMethod === 'paypal' ? 'bg-[#658C4A] text-white border-white' : 'bg-[#f0f0f0] text-black border-black'
            }`}
            type='button'
            onClick={() => setSelectedPaymentMethod('paypal')}
          >
            <div className='flex gap-3 items-center'>
            {
              selectedPaymentMethod === 'paypal' ? <FaRegCheckCircle size={16}/> : <FaRegCircle size={16}/>
            }
              <BsBank2 size={20}/>
              Through visa bank, master card
            </div>
          </button>
        </div>
        <input
          type="hidden"
          name="paymentMethod"
          value={selectedPaymentMethod}
          {...register('paymentMethod', { required: true })}
        />
        
          <button
          className='bg-[#658C4A] px-4 py-2 rounded-lg text-white hover:bg-[#456131] font-bold'
          type="submit"> Submit Information
          </button>
      </form>
    </div>
  )
}

export default AccountPayment