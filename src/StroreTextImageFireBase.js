import React, { useEffect, useState } from 'react'
import { imgDB,textDB } from './firebase/textImgConfig';
import {v4} from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, getDocs } from 'firebase/firestore';

function StroreTextImageFireBase() {
    const [uname,setUName]=useState('');
    const [time,setTime]=useState('');
    const [message,setMessage]=useState('');
    const [img,setImg]=useState('');

    const[data,setData] = useState([])

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

   useEffect(()=>{
    const timeId = setInterval(()=>{
    const currentTime = hours + ':' + minutes;
        setTime(currentTime);
    }, 1000);
    return ()=>clearInterval(timeId);

   },[]);

   console.log(time);

   

    const handleUpload = (e)=>{
        console.log(e.target.files[0]);
        const imgs = ref(imgDB,`imgs/${v4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs");
            
            getDownloadURL(data.ref).then(val=>{
                console.log(val);
                setImg(val);
            })
        })
    }

    const handleAdd= async()=>{
        const valRef = collection(textDB,'textData')
        await addDoc(valRef,{name:uname,timeStamp:time,msg:message,imgUrl:img})
        alert("Data added sucessfully")
    }
    
    const getData = async()=>{
        const valRef = collection(textDB,'textData')
            const dataDb = await getDocs(valRef)
            const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
            setData(allData)
            console.log(dataDb);
    }

    useEffect(()=>{
        getData()
    })
    console.log(data,"data");

  return (
    <div>
        <div>
            <input type='text'onChange={(e)=>setMessage(e.target.value)} placeholder='message' />
            <br/>
            <input type='text'onChange={(e)=>setUName(e.target.value)} placeholder='uname' />
            <br/>
            <input type='file' onChange={(e)=>handleUpload(e)} />
            <br/>
            <button onClick={handleAdd}>Add</button>
        </div>
        {
            data.map(value=><div>
                <h1>{value.name}</h1>
                <h6>{value.timeStamp}</h6>
                <h6>{value.msg}</h6>
                <img src={value.imgUrl} alt='' height='200px' width='200px' />
            </div>)
        }
    </div>
  )
}

export default StroreTextImageFireBase