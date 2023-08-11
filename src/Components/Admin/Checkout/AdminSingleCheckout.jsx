import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getCheckout, updateCheckout } from '../../../Store/ActionCreators/CheckoutActionCreators'
import { useParams } from 'react-router-dom'

export default function AdminSingleCheckout() {
    var [data, setData] = useState({
        products: []
    })
    var [orderstatus, setOrderStatus] = useState("")
    var [paymentstatus, setPaymentStatus] = useState("")
    var allStateData = useSelector(state => state.CheckoutStateData)
    var dispatch = useDispatch()
    var { id } = useParams()

    function updateItem() {
        dispatch(updateCheckout({ ...data, orderstatus: orderstatus, paymentstatus: paymentstatus }))
        setData({ ...data, orderstatus: orderstatus, paymentstatus: paymentstatus })
    }

    function getAPIData() {
        dispatch(getCheckout())
        if (allStateData.length) {
            let item = allStateData.slice(1).find((x) => x.id === Number(id))
            setData(item)
            setOrderStatus(item.orderstatus)
            setPaymentStatus(item.paymentstatus)
        }
    }
    useEffect(() => {
        getAPIData()
    }, [allStateData.length])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>Admin Portal</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="table-responsive">
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Id</th>
                                        <td>{data.id}</td>
                                    </tr>
                                    <tr>
                                        <th>Payment Mode</th>
                                        <td>{data.paymentmode}</td>
                                    </tr>
                                    <tr>
                                        <th>Payment Status</th>
                                        <td>{data.paymentstatus}
                                        <br />
                                            {
                                                data.paymentmode === "COD" && data.paymentstatus === "Pending" ?
                                                    <select name="paymentstatus" className='form-control w-50' value={paymentstatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                                                        <option value="Pending">Pending </option>
                                                        <option value="Done">Done</option>
                                                    </select> : ""
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Order Status</th>
                                        <td>{data.orderstatus}
                                        <br />
                                            {
                                                data.orderstatus !== "Delivered" ?
                                                    <select name="orderstatus" className='form-control w-50' value={orderstatus} onChange={(e) => setOrderStatus(e.target.value)}>
                                                        <option value="Order Placed">Order Placed </option>
                                                        <option value="Packed">Packed</option>
                                                        <option value="Preparing to Dispatch">Preparing to Dispatch</option>
                                                        <option value="On the way">On the way</option>
                                                        <option value="Delivered">Delivered</option>
                                                    </select> : ""
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>&#8377;{data.subtotal}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping</th>
                                        <td>&#8377;{data.shipping}</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td>&#8377;{data.total}</td>
                                    </tr>
                                    {
                                        data.rppid ?
                                            <tr>
                                                <th>RPPID</th>
                                                <td>{data.rppid}</td>
                                            </tr> : ""
                                    }
                                    <tr>
                                        <th>Date</th>
                                        <td>{data.date}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan="2">
                                            {
                                                data.paymentstatus === "pending" || data.orderstatus !== "Delivered" ?
                                                    <button className='btn btn-success w-100' onClick={updateItem}>Update</button>
                                                    : ""

                                            }
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h3 className='text-center my-3'>Checkout Products</h3>
                    <table className=" table cart-table ">
                        <thead className="cart-table-head">
                            <tr className="table-head-row">
                                <th colSpan="2" className="product-name">Name</th>
                                <th className="product-qty">Summary</th>
                                <th className="product-price">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.products.map((item, index) => {
                                    return <tr key={index} className="table-body-row">
                                        <td className="product-image text-center"><img src={`/assets/products/${item.pic}`} alt="" /></td>
                                        <td className="product-name text-center">{item.name} <br />{item.brand}/{item.color}/{item.size} </td>
                                        <td className="product-qty text-center">{item.price} X {item.qty}</td>
                                        <td className="product-price text-center">&#8377;{item.total}</td>
                                    </tr>
                                })
                            }</tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
