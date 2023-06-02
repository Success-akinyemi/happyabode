import React, { useState } from 'react'
import './NewHouse.css'
import { request } from '../../axios';
import { State } from '../../data/States';
import { Toaster, toast } from 'react-hot-toast';


function NewHouse() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [address, setAddress] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [img, setImg] = useState(null)
  const [imgArray, setImgArray] = useState([])
  const [desc, setDesc] = useState('')

  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

 // function validateImg(e) {
    //const file = e.target.files[0];
      //setImg(file);
      //setImagePreview(URL.createObjectURL(file))
  //}


function validateImg(e) {
  const files = Array.from(e.target.files);
  const fileURLs = files.map((file) => URL.createObjectURL(file));

  // Check if the input name is 'img' (main image input)
  if (e.target.name === 'img') {
    setImg(files[0]);
    setImagePreview(fileURLs[0]);
  } else {
    setImgArray(files);
    setImagePreview(fileURLs);
  }
}

  async function uploadImage(){
    const data = new FormData();
    data.append('file', img);
    data.append('upload_preset', 'wtqdxw06');

    try {
      const urlData = await toast.promise(
        fetch('https://api.cloudinary.com/v1_1/dsjwuwjm1/image/upload', {
          method: 'post',
          body: data,
        }),
        {
          loading: 'Please Wait...',
          success: 'Image Uploaded Successfully',
          error: 'Failed to Upload Image',
        }
      );
  
      return urlData.url;
    } catch (err) {
      console.log(err);
    }
  }

  





  const submitNewHouse = async (e) => {
    e.preventDefault()
    try {
      const data = {};
  
      if (title !== '') data.title = title;
      if (price !== '') data.price = price;
      if (address !== '') data.address = address;
      if (newLocation !== '') data.location = newLocation;
      if (desc !== '') data.desc = desc;
  
      if (img) {
        const imgData = await uploadImage();
        data.img = imgData;
        console.log('Main image URL:', data.img);

      }
  
      if (imgArray.length > 0) {
        const imgUrls = await Promise.all(imgArray.map(uploadImage));
        data.imgArray = imgUrls;
      }
  
      console.log('Form data:', data);
      
      const newHouseData = await request.post('/v1/house', data);
      console.log('New house data:', newHouseData);
      toast.success('New House Added')
      setTitle('')
      setPrice('')
      setImg('')
      setImgArray('')
      setNewLocation('')
      setAddress('')
      setDesc('')
  
    } catch (error) {
      console.log('Error updating form:', error);
      toast.error('Failed to add new House')
    }
  };



  const setNewLocationValue = (value) => {
    setNewLocation(value);
  };


  return (
    <div className='newHouse pages'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="left">
        <h2>ADD NEW HOUSE</h2>

        <div className="content">
          <form onSubmit={submitNewHouse} >
            <div className='item'>
              <label>Title:</label>
              <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='house title' />
            </div>

            <div className='item'>
              <label>Price:</label>
              <input type="number"  name='price' value={price} onChange={(e) => setPrice(e.target.value)}  placeholder='house price' />
            </div>

            <div className='item'>
              <label>Address</label>
              <input type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='house address' />
            </div>

            <div className='item'>
              <label>Location: (State)</label>
              <select name="location" value={newLocation} onChange={(e) => setNewLocationValue(e.target.value)}>
              <option >Select State</option>
                {State.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.location}
                  </option>
                ))}
                </select>
            </div>

            <div className='item'>
              <label htmlFor='img'>Main Image:</label>
              <input type="file"  name='img'  onChange={validateImg} accept='image/jpeg image/png' style={{border: 'none'}}/>
            </div>

            <div className='item'>
              <label htmlFor='imgArray'>Showcase Images:</label>
              <input type="file"  multiple name='imgArray' onChange={validateImg} accept='image/jpeg image/png' style={{border: 'none'}}/>
            </div>

            <div className='item'>
              <label>Description:</label>
              <textarea type="text" name='desc' value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='house description' rows='1' cols='1' ></textarea>
            </div>

            <button>{uploadingImg ? 'Please Wait' : 'Add New House'}</button>
          </form>
        </div>

        </div>
        
      {//  <div className="right">
        //  <div className="top">
        //    <span>Current House Image</span>
        //    <img className='image' src={house.img} alt={`house in ${house.address}`} />
        //  </div>
        //  </div> /
        }
    </div>
  )
}

export default NewHouse