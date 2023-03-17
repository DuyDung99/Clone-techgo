<template>
    <div class="user-h2">
        <h2>Chi tiết đơn hàng</h2>
    </div>
    <div class="Oder-detail">
        <div>
            <div class="detail-p">
                <p>Đơn hàng: #100037</p>
                <p>Đặt Lúc - 08/02/2023, 10:39CH</p>
                <a href="">Quay lại trang tài khoản</a>
            </div>
            <div class="customer_orders">
                <div class="customer-table-wrap">
                    <div class="customer-table">
                        <h4>Chi tiết đơn hàng</h4>
                        <div>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-left items-img">
                                            Sản phẩm
                                        </th>
                                        <th class="text-left">
                                            Mã sản phẩm
                                        </th>
                                        <th class="text-left">
                                            Đơn giá
                                        </th>
                                        <th class="text-left">
                                            Số lượng
                                        </th>
                                        <th class="text-left">
                                            Thành tiền
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="items-td" v-for="item in orderDetail" :key="item.name">
                                        <td class="bl-flex">
                                            <div class="bl-img">
                                                <img :src="item.thumb" alt="">
                                            </div>
                                            <span class="bl-name">{{ item.name }}</span>
                                        </td>
                                        <td><span>{{ item.productcode }}</span></td>
                                        <td><span>{{ item.unitprice }}</span></td>
                                        <td><span>{{ item.salary }}</span></td>
                                        <td><span> 20.916.000đ</span></td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <div class="block-body">
                                <div class="block-p">
                                    <p>Giá sản phẩm</p>
                                    <p>20.916.000đ</p>
                                </div>
                                <div class="block-p">
                                    <p>Giao hàng tận nơi</p>
                                    <p>0đ</p>
                                </div>
                                <div class="block-p">
                                    <p>Tổng tiền</p>
                                    <p>20.916.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ---------------------------------------------------------------- -->
            <div class="customer-status-order">
                <div class="row">
                    <div class="order_payment">
                        <h5>ĐỊA CHỈ NHẬN THANH TOÁN</h5>
                        <div class="alert">
                            <span>Tình trạng thanh toán: </span>
                            <span>Chờ xử lý</span>
                        </div>
                        <div class="box-address">
                            <p>Dũng</p>
                            <p>12-ha noi</p>
                            <p>Hà Nội</p>
                            <p>Vietnam</p>
                            <p>099999999</p>
                        </div>
                    </div>
                    <div class="order_payment">
                        <h5>ĐỊA CHỈ GỬI HÀNG</h5>
                        <div class="alert">
                            <span>Vận chuyển: </span>
                            <span>Chờ xử lý</span>
                        </div>
                        <div class="box-address">
                            <p>Dũng</p>
                            <p>12-ha noi</p>
                            <p>Hà Nội</p>
                            <p>Vietnam</p>
                            <p>099999999</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderDetail: [
                {
                    thumb: 'https://product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_master.png',
                    name: 'Smart Tivi NanoCell LG 4K 50 inch 50NANO86TPA', unitprice: '20916000', salary: '1', productcode: '',
                },
                {
                    thumb: 'https://product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_master.png',
                    name: 'Smart Tivi NanoCell LG 4K 50 inch 50NANO86TPA', unitprice: '20916000', salary: '1', productcode: '',
                },
            ],
        }
    }
}
</script>

<style scoped>
.Oder-detail {
    padding: 0 40px;
}

.user-h2 {
    margin-bottom: 24px;
}

.user-h2 h2 {
    display: flex;
    justify-content: center;
    position: relative;
    font-weight: 600;
}

.user-h2::after {
    content: '';
    width: 80px;
    height: 2px;
    background-color: black;
    position: absolute;
    right: 35%;
    top: 26%;
}

.customer-table-wrap {
    background-color: #d9edf7;
    padding: 8px 10px;
    margin: 30px 0;
}

.customer-table-wrap {
    background-color: #d9edf7;
    padding: 8px 10px;
    margin: 30px 0;
}

.customer-table {
    background-color: white;
}

.customer-table h4 {
    padding: 4px 12px;
    border-bottom: 1px solid #d9edf7;
}

.text-left {
    width: 13.75%;
    text-align: center !important;
}

.items-img {
    width: 45%;
    text-align: left !important;
}

.bl-img {
    width: 12%;
}

.bl-img img {
    width: 100%;
}

.bl-name {
    padding: 6px 12px;
}

.items-td td {
    border-bottom: none !important;
    font-size: 0.82rem;
    margin-bottom: 12px;
    margin-top: 6px;
    text-align: center;
}


.bl-flex {
    display: flex;
}

.block-body {
    border-top: 1px solid #d9edf7;
    margin-top: 24px;
}

.detail-p p {
    font-size: 0.9rem;
    padding: 4px 8px;
}

.detail-p a {
    font-size: 0.9rem;
    padding: 4px 8px;
    color: #3498db;
}

.block-p {
    display: flex;
    justify-content: space-between;
    padding: 6px 20px;
}

.block-p p {
    font-weight: 500;
    font-size: 0.9rem;
}

.order_payment {
    width: 50%;
    padding: 0 10px;

}

.order_payment h5 {
    padding: 12px 0;
}

.row {
    display: flex;
}

.alert {
    border-radius: 0;
    margin-bottom: 0;
    color: #31708f;
    padding: 12px;
    background-color: #d9edf7;
    border: 1px solid #bce8f1;
    font-size: 0.9rem;
}

.box-address {
    margin: 0px 0px 30px;
    padding: 10px;
    background-color: #fbfbfb;
}

.box-address p {
    padding: 2px 5px;
    font-size: 0.85rem;
}

::v-deep .v-table .v-table__wrapper>table>thead>tr>th {
    border-bottom: 1px solid #d9edf7;
}
</style>