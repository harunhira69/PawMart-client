import React, { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import toast from 'react-hot-toast';
import useAuth from '../../hook/useAuth';
import Loading from '../../component/Loading';
import SearchInput from '../SearchInput/SearchInput';
import { Link } from 'react-router';

const AllPetsSupplies = () => {
    const axios = useAxios();
    const {loading} = useAuth();
    const[items,setItems] = useState([]);
    const[filterData,setFilterData] = useState([]);
    const[search,setSearch] = useState("");
    const [category,setCategory] = useState('All');

    useEffect(()=>{
        const fetchAll = async()=>{
            try{
                const res = await axios.get('all-item');
                console.log(res.data)
                setItems(res.data)
                setFilterData(res.data)
            }catch(err){
                toast.error(err.message)
            }


        };
        fetchAll()
    },[axios])

    // filter and search
  useEffect(() => {
    let data = [...items];

    if (category !== "All") {
      data = data.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }

    if (search.trim() !== "") {
      data = data.filter(
        item =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterData(data);
  }, [search, category, items]);


    if(loading)return<Loading></Loading>



    return (
        <div className='container mx-auto '>
        <SearchInput search={search} 
        setSearch={setSearch}
         category={category}
         setCategory={setCategory}

        ></SearchInput>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {
            filterData.length>0 ? filterData.map(filter=>(
                <div key={filter._id} className="border rounded shadow p-4 flex flex-col">
        <img
          src={filter.image}
          alt={filter.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="font-bold text-lg">{filter.name}</h3>
        <p className="text-gray-600">{filter.category}</p>
        <p className="text-gray-600">{filter.location}</p>
        <p className="text-gray-800 font-semibold">
          {filter.price === "Free for Adoption" || filter.price === 0
            ? "Free"
            : `$${filter.price}`}
        </p>
      <Link to={`/product/${filter._id}`}>
  <button className="mt-auto bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition">
    See Details
  </button>
</Link>
      </div>
            )):( <p className="col-span-3 text-center text-gray-500">
            No products found.
          </p>)
          }
        </div>

        </div>
    );
};

export default AllPetsSupplies;