import React from "react";
import "./Order.css";
function Order() {
   return <div>
      <div className="container-order">
         <div className="info-customer">
            <h3>THÔNG TIN KHÁCH HÀNG</h3>
            <table className="table-info">
               <tr>
                  <td>
                     <label className="label-info">Họ tên</label>
                  </td>
                  <td>
                     <input type="text" placeholder="Nhập tên khách hàng"></input>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label className="label-info">Số điện thoại</label>
                  </td>
                  <td>
                     <input type="text" placeholder="Số điện thoại"></input>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label className="label-info">Địa chỉ</label>
                  </td>
                  <td>
                     <input type="text" placeholder="Địa chỉ"></input>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label className="label-info">Phương thức thanh toán</label>
                  </td>
                  <td>
                     <select>
                        <option>Trả tiền sau khi nhận hàng</option>
                        <option>Trả bằng tài khoản ngân hàng</option>
                        <option>Trả bằng Zalopay</option>
                     </select>
                  </td>
               </tr>
            </table>
         </div>
         <div className="line-cutting"></div>
         <div className="detail-payment">
            <h3><i class="fa-solid fa-file-invoice"></i> CHI TIẾT THANH TOÁN</h3>
            <table className="table-info">
               <tr>
                  <td>
                     <label className="label-detail">Tổng tiền hàng</label>
                  </td>
                  <td>
                     <label>300000</label>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label>Chi phí vận chuyển</label>
                  </td>
                  <td>
                     <label>15000</label>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label>Tổng thanh toán</label>
                  </td>
                  <td>
                     <label>315000</label>
                  </td>
               </tr>
            </table>
         </div>
         <button className="btn-buying">Mua Hàng</button>
      </div>
   </div>;
}

export default Order;
