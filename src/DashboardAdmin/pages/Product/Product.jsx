import { Link , useParams} from 'react-router-dom'
import Chart from './../../components/Chart/Chart'
import { productsData , products } from '../../datas'

import PublishIcon from "@mui/icons-material/Publish";


import './Product.css'

export default function Product() {

  const Id = useParams()
  const dataPro = products.filter((e)=> e.id == Id.productID)[0]
  // console.log(dataPro);

  return (
    <div className='product'>

        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>

        <div className="productTop">

          <div className="productTopLeft">
            <Chart title="Sale In Month" data={productsData} dataKey='sales' />
          </div>

          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={dataPro.avatar} alt={dataPro.title} className='productInfoImg' />
              <span className='productName'>{dataPro.title}</span>
            </div>

            <div className="productInfoBottom">
              <div className="productInfoItem">
                <div className="productInfoKey">ID: </div>
                <div className="productInfoValue">{dataPro.id}</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Name: </div>
                <div className="productInfoValue">{dataPro.title}</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Sales: </div>
                <div className="productInfoValue">${dataPro.price}</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Active: </div>
                <div className="productInfoValue">Yes</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">In Stock: </div>
                <div className="productInfoValue">No</div>
              </div>
            </div>

          </div>

        </div>

        <div className="productBottom">
          <form className="productForm">

            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type="text" placeholder={dataPro.title} />

              <label>In Stock</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label>Active</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

            </div>

            <div className='productFormRight'>

              <div className='productUploader'>
                <img src={dataPro.avatar} alt="profile photo" className='productUploaderImg' />
                <label>
                  <PublishIcon />
                </label>
                <input type="file" style={{display: "none"}} />
              </div>

              <button className='productButton'>Upload (Edit)</button>

            </div>

          </form>
        </div>

    </div>
  )
}
