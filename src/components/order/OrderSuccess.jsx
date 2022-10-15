import React from "react";
import "./Order.css";
function OrderSuccess() {
    return <div>
        <div className="container-success">
            <i class="fa-regular fa-circle-check success-icon"></i>
            <h2>Đặt hàng thành công</h2>
            <div className="after-buying">
                <button className="btn-next">XEM ĐƠN HÀNG</button>
                <button className="btn-next">TIẾP TỤC MUA HÀNG</button>
            </div>
        </div>
    </div>;
}

export default OrderSuccess;
