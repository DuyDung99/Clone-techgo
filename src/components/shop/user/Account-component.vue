<template>
    <div class="user-h2">
        <h2>Tài khoản của bạn</h2>
    </div>
    <div>
        <div class="acount">
            <div class="acount-info">
                <h4 @click="click">THÔNG TIN TÀI KHOẢN</h4>
                <ul>
                    <li>{{ userData.firstname }} {{ userData.lastname }}</li>
                    <li>{{ userData.email }} </li>
                    <li>{{ userData.address }}</li>
                    <li>{{ userData.phone_number }}</li>
                    <li>
                        <v-row>
                            <v-dialog v-model="dialog" persistent width="auto">
                                <template v-slot:activator="">
                                    <p class="modal-p" @click="openModalUpdate()">Thay đổi </p>
                                </template>
                                <v-card>
                                    <v-card-title class="text-h5">
                                        Thay đổi thông tin tài khoản
                                    </v-card-title>

                                    <v-card-text>
                                        <div class="form-modal">
                                            <p>Email: {{ dataUpdateUser.email }}</p>
                                        </div>
                                        <div class="form-modal">
                                            <input name="firstname" type="text" placeholder="First Name"
                                                v-model="dataUpdateUser.firstname" />
                                        </div>
                                        <div class="form-modal">
                                            <input name="lastname" type="text" placeholder="Last Name"
                                                v-model="dataUpdateUser.lastname" />
                                        </div>
                                        <div class="form-modal">
                                            <input name="phone" type="text" placeholder="Phone"
                                                v-model="dataUpdateUser.phone_number" />
                                        </div>
                                        <div class="form-modal">
                                            <input name="address" type="text" placeholder="Address"
                                                v-model="dataUpdateUser.address" />
                                        </div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                                            Close
                                        </v-btn>
                                        <v-btn color="green-darken-1" variant="text"
                                            @click="dialog = false, onSubmitUpdateUser()">
                                            Update
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                    </li>
                </ul>

            </div>
            <div class="customer_orders">
                <div class="customer-table-wrap">
                    <div class="customer-table">
                        <h4>Danh sách đơn hàng mới nhất</h4>
                        <div>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Mã đơn hàng
                                        </th>
                                        <th class="text-left">
                                            Ngày đặt
                                        </th>
                                        <th class="text-left">
                                            Thành tiền
                                        </th>
                                        <th class="text-left">
                                            Trạng thái thanh toán
                                        </th>
                                        <th class="text-left">
                                            Vận chuyển
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="items-td" v-for="item in orderList" :key="item.name">
                                        <td><a href="">{{ item.menu }}</a></td>
                                        <td>{{ item.date }}</td>
                                        <td>{{ item.price }}</td>
                                        <td>{{ item.status }}</td>
                                        <td>{{ item.ship }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '@/api';
export default {
    components: {

    },

    data() {
        return {
            orderList: [
                { menu: '#100037', date: '08/02/2023', price: '62550000', status: 'Chờ sử lý', ship: 'Chờ sử lý' },
                { menu: '#100037', date: '08/02/2023', price: '62550000', status: 'Chờ sử lý', ship: 'Chờ sử lý' },
            ],
            dialog: false,
            dataUpdateUser: {
                firstname: '',
                lastname: '',
                email: '',
                phone_number: '',
                address: '',
            },
        }
    },

    props: {
        userData: {
            type: Object
        }
    },

    methods: {
        click() {
            console.log(this.userData, 81);
        },

        reload() {
            location.reload();
        },

        openModalUpdate() {
            this.dialog = true
            console.log(this.dataUpdateUser);
        },

        async onSubmitUpdateUser() {
            const token = localStorage.getItem('access_token');
            const data = this.dataUpdateUser;
            delete data.email;
            const res = await api.updateProfile(token, data);
            this.reload()
            console.log('res', res);
            console.log('data', data);
        },

        validateEmail(value) {
            // email để trống
            if (!value) {
                this.wrongEmail = false;
                return 'This field is required';
            }

            // email không hợp lệ
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                this.wrongEmail = false;
                return 'This field must be a valid email';
            }
            this.wrongEmail = true;
            return true;
        },
    },

    created() {
        // this.dataUpdateUser = this.userData
    }
}
</script>

<style scoped>
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
    top: 27%;
}

.acount {
    padding: 0 50px;
    margin-bottom: 50px;
    /* border: 1px solid #eae4e8; */
}

.acount-info li {
    padding: 6px 12px;
    list-style: none;
    font-size: 0.9rem;
}

.acount-info h4 {
    font-weight: 600;
    border-bottom: 1px solid #eae4e8;
    padding: 6px;
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
    width: 20%;
}

.items-td td {
    border-bottom: none !important;
    font-size: 0.9rem;
    color: #34495e;
}

.items-td a {
    color: #34495e;
    text-decoration: none;
}

.items-td a:hover {
    color: #2980b9;
}

.modal-p {
    text-decoration: underline;
    color: #137fc8;
    padding: 6px 12px;
    cursor: pointer;
}

.form-modal {
    margin-bottom: 12px;
}

.form-modal input {
    padding: 4px 8px;
    border: 1px solid black;
    width: 100%;
    border-radius: 6px;
}

.form-modal span {
    font-size: 12px;
    padding: 4px;
    color: red;
}

::v-deep .v-dialog .v-overlay__content {
    max-height: 0;
}

::v-deep .v-card {
    width: 500px;
}
</style>