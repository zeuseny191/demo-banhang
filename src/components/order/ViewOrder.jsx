import React from "react";
import "./Order.css";
function ViewOrder() {
    return <div>
        <div className="container-view">
            <div className="process-type">
                <label className="process-label">Tất cả</label>
                <label className="process-label">Chờ xử lý</label>
                <label className="process-label">Đang giao</label>
                <label className="process-label">Đã giao</label>
            </div>
            <h4>Danh sách đơn hàng</h4>
            <div className="list-product">
                <div className="product">
                    <img className="img-product" src="https://cf.shopee.vn/file/771a3f5ae89529ef45616442bb1f0f18"></img>
                    <label className="field-product name">Gạo ST25 Sóc Trăng (Bao 5 ký)</label>
                    <label className="field-product price">200000đ</label>
                    <label className="field-product status">Đang xử lý</label>
                    <button className="btn-cancel">Huỷ đơn hàng</button>
                </div>
            </div>
        </div>
    </div>;
}

export default ViewOrder;
