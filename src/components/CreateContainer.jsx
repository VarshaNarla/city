import React, { useState } from 'react'
import {motion} from "framer-motion"
import {MdFastfood, MdCloudUpload, MdDelete ,MdFoodBank,MdAttachMoney} from "react-icons/md"
import {categories} from "../utils/data"
import Loader from './Loader'
import {connectStorageEmulator, deleteObject, getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {storage} from '../firebase.config'
import {saveItem}  from '../utils/firebaseFunctions'
import { useStateValue } from "../context/stateProvider";
import { getAllFoodItems } from "../utils/firebaseFunctions";
import { actionType } from "../context/reducer";
 
const CreateContainer = () => {
  const [title,setTitle] = useState("");
  const [calories,setCalories] = useState("");
  const  [price,setPrice] = useState("");
  const [category,setCategory] = useState(null);
  const [imgAsset,setImgAsset] = useState(null);
  const [fields,setFields] = useState(false);
  const [alertStatus,setAlertStatus] = useState("danger");
  const [msg,setMsg] = useState("");
  const [isLoading,setIsLoading] = useState(false)
  const [{foodItems},dispatch] = useStateValue()

  const uploadImg= (e) => {
    setIsLoading(true);
    const imgFile = e.target.files[0];
    console.log(imgFile);
    const storageRef = ref(storage, `Images/${Date.now()}-${imgFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef,imgFile);
    uploadTask.on('state_changed',(snapshot) =>{
      const uploadProgress = (snapshot.bytesTransferred/snapshot.totalBytes ) *100;
    },(error)=> {
      console.log(error);
      setFields(true);
      setAlertStatus("danger");
      setMsg("Error while uploading , Try Again");
      setTimeout(()=>{
        setFields(false);
        setIsLoading(false)
      },4000)
    },() => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
        setImgAsset(downloadUrl);
        setIsLoading(false);
        setFields(true);
        setAlertStatus("success");
        setMsg("Image uploaded successfully");
        setTimeout(()=>{
          setFields(false);
        },4000)
      })
    })
  }
  const deleteImg= () => {
   setIsLoading(true);
   const deleteRef = ref(storage,imgAsset);
   deleteObject(deleteRef).then(() => {
    setImgAsset(null);
    setIsLoading(false);
    setFields(true);
    setAlertStatus("success");
    setMsg("Image deleted successfully!!");
    setTimeout(() => {
      setFields(false);
    }, 4000);
   })
  }
  const saveDetails= () => {
    setIsLoading(true);
    try{
      if(!title || !calories || !imgAsset || !price || !category){
        setFields(true);
        setAlertStatus("danger");
        setMsg("Required fields can't be empty");
        setTimeout(()=>{
          setFields(false);
          setIsLoading(false);
        },4000)
      }else{
        const data = {
          id: `${Date.now()}`,
          title: title,
          imgUrl:imgAsset,
          category:category,
          calories:calories,
          qty:1,
          price:price
        }
        saveItem(data)
        setIsLoading(false);
        setFields(true);
        setAlertStatus("success");
        setMsg("Data uploaded successfully!!");
        setTimeout(() => {
          setFields(false);
          clearData();
        }, 4000);
      }
    }
    catch(error){
      console.log(error);
      setFields(true);
      setAlertStatus("danger");
      setMsg("Error while uploading , Try Again");
      setTimeout(()=>{
        setFields(false);
        setIsLoading(false)
      },4000)
    }

    fetchData();
  }
  const clearData= () =>{
    window.location.reload(); 
  }
  const fetchData = async () =>{
    await getAllFoodItems().then(data =>{
       dispatch({
        type:actionType.Set_FOOD_ITEMS,
        foodItems:data
       })
    })
}

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border justify-center flex flex-col items-center rounded-lg border-gray-300 p-4 gap-2'>
        {
          fields && 
          <motion.p 
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className={`w-full text-center text-lg font-semibold rounded-lg p-2 ${alertStatus === "danger" ? "bg-red-400 text-red-700"  : "bg-emerald-500 text-emerald-700" }`}>
              {msg}
          </motion.p>
        }
        <div className='w-full py-2 flex items-center gap-2 border-b border-gray-300'>
        <MdFastfood className='text-xl text-gray-700'/>
        <input 
          type="text" 
          required 
          value={title}
          placeholder='Give me a name ....'
          onChange={(e) => setTitle(e.target.value)}
          className='w-full h-full border-none bg-transparent outline-none placeholder:text-gray-400 font-semibold text-textColor'/>
        </div>
        <div className='w-full py-2 border-b border-gray-300'>
          <select className='w-full bg-transparent border-none outline-none font-semibold text-textColor cursor-pointer' onChange={(e) => setCategory(e.target.value)}>
            <option className='font-semibold text-textColor ' value="others">Select Option</option>
            {categories && categories.map((item) => (
            <option key={item.id} className="font-semibold text-textColor " value={item.urlParamName}>
              {item.name}
            </option>

            )) }
          </select>
        </div>
        <div className=' w-full border-dotted border-2  border-gray-300 rounded-lg  '>
          {imgAsset && 
          <div className='flex justify-end items-end'>
            <motion.button whileHover={{scale:1.2}}type='button' className='rounded-full md:p-3 p-2 text-xl outline-none 
                 cursor-pointer ' onClick={deleteImg}>
                <MdDelete  className='text-gray-500 text-2xl'/>
            </motion.button>
          </div>
          }  
          <div className='group flex justify-center items-center flex-col 
            w-full h-[200px] md:h-[400px] cursor-pointer '>
            {isLoading ? (<Loader></Loader>) : (<>
              { !imgAsset ? (<>
                <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                  <div className='w-full h-full flex flex-col items-center justify-center gap-2 '>
                    <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/> 
                    <p className='text-gray-500  hover:text-gray-700'>Click here to Upload</p>
                  </div>
                  <input type='file' name="uploadimage" accept='image/*' onChange={uploadImg} className='w-0 h-0'/>
                </label>
              </>) : (<>
              <div className='relative h-full'>
                <img src={imgAsset} alt="uploadedImg" className='w-full h-[80%] object-cover'/>
              </div>
              </>)
              }
        
        </>)}
        </div>
        </div>
        
        <div className='w-full flex flex-col md:flex-row  items-center gap-3'>
            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-1 '>
              <MdFoodBank className='text-gray-700 text-2xl'/>
              <input type='text' required placeholder='Calories' value={calories} onChange={(e) => {setCalories(e.target.value)}} className='w-full h-full text-lg bg-transparent 
               border-none outline-none placeholder:text-gray-400 font-semibold text-textColor' ></input>
            </div>
            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-1 '>
              <MdAttachMoney className='text-gray-700 text-2xl'/>
              <input type='text' required placeholder='Price' value={price} onChange={(e) => {setPrice(e.target.value)}} className='w-full h-full text-lg bg-transparent 
               border-none outline-none placeholder:text-gray-400 font-semibold text-textColor' ></input>
            </div>
        </div>
        <div className='flex items-center w-full'> 
          <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none
             bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold' onClick={saveDetails}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer