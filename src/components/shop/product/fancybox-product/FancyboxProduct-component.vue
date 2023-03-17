<template>
    <div>
        <v-carousel v-model="model">
            <v-carousel-item v-for="(color, i) in image_link" :key="color" :value="i">
                <img :src="color" alt="">
            </v-carousel-item>
        </v-carousel>
        <div>
            <span style="padding: 12px;  margin-left: 12px;" v-for="(img, i) in thumnail_image_links" :key="i" :value="i">
                <img :src="img" alt="" @click="onClick(i)">
            </span>
        </div>

        <!-- ---------------------------------------------------------------- -->

        <v-row justify="center">
            <v-dialog v-model="dialog" persistent width="1024">
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">
                        Open Dialog
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
    <br>
    <br>
    <br>
    <div id="heroes">
        <form class="form-inline">
            <input type="text" class="form-control " placeholder="Search" v-model="search_filter" @keyup="updatePaginate">
            <button @click.prevent="setStatus('')">All</button>
            <button @click.prevent="setStatus('DC')">DC</button>
            <button @click.prevent="setStatus('Marvel')">Marvel</button>
        </form>

        <!-- <table class="table table-striped">
            <thead>
                <tr>
                    <td>Hero Name</td>
                    <td>Universe</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hero in heroes | filterBy search_filter in 'name' | filterBy status_filter in 'universe'"
                    :key="[hero]" v-show="setPaginate($index)">
                    <td>{{ hero.name }}</td>
                    <td>{{ hero.universe }}</td>
                </tr>
            </tbody>
        </table>
        <div id="pagination">
            <a href="#" class="btn btn-default" v-for="page_index in paginate_total" :key="page_index"
                @click.prevent="updateCurrent(page_index + 1)">
                {{ page_index + 1 }}
            </a>
        </div> -->
        <br>
        <br>
        <br>
        <br>
        <div id="app" class="container">
            <ul class="list-group">
                <li v-for="item in collection" :key="item" class="list-group-item">
                    {{ item.name }}

                </li>

            </ul>
            <hr>
            <div class="btn-toolbar">
                <div class="btn-group">
                    <button class="btn btn-primary" v-for="p in pagination.pages" :key="p" @click.prevent="setPage(p)">{{ p
                    }}</button>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>



    <div class="container">
        <div class="row">
            <div class="col">

                <div v-for="cat in categoryList" :key="cat">
                    <input type="checkbox" :id="cat" :value="cat" v-model="categories">
                    <label :for="cat">{{ cat }}</label>
                </div>
                <br>
                <span>You have chosen: {{ categories }}</span>

            </div>
            <div class="col">
                <strong>Items in chosen category(s)</strong>

                <ul>
                    <li v-for="item in selectedItems" :key="item"> category: {{ item.category }} | name: {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    data() {
        return {
            dialog: false,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            model: 0,
            image_link: [
                "//product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_master.png",
                "//product.hstatic.net/200000516791/product/product_23_2_4935dd9b12f34816a287d5453a9be876_1375950e93174ff09f60f8169ce733da_master.png",
                "//product.hstatic.net/200000516791/product/product_23_3_e6936a60b48144ceaad1f53a59872d4a_3f238840af0347e7878d2cecef17a53d_master.png",
                "//product.hstatic.net/200000516791/product/product_27_3_b64ab2ee0acc4c248b7d6c177663bc12_6dff7c9a80db4d77854643f9eafe18d6_master.png"
            ],
            thumnail_image_links: [
                "//product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_compact.png",
                "//product.hstatic.net/200000516791/product/product_23_2_4935dd9b12f34816a287d5453a9be876_1375950e93174ff09f60f8169ce733da_compact.png",
                "//product.hstatic.net/200000516791/product/product_23_3_e6936a60b48144ceaad1f53a59872d4a_3f238840af0347e7878d2cecef17a53d_compact.png",
                "//product.hstatic.net/200000516791/product/product_27_3_b64ab2ee0acc4c248b7d6c177663bc12_6dff7c9a80db4d77854643f9eafe18d6_compact.png"
            ],
            categoryList: ['animal', 'fruit', 'clothes'],
            categories: [],
            items: [
                { id: '1', name: 'apple', description: 'description about product', category: 'fruit', },
                { id: '2', name: 'mango', description: 'description about product', category: 'fruit', },
                { id: '3', name: 'shoes', description: 'description about product', category: 'footwear', },
                { id: '4', name: 'shirt', description: 'description about product', category: 'clothes', },
                { id: '5', name: 'dog', description: 'description about product', category: 'animal', },
                { id: '6', name: 'cat', description: 'description about product', category: 'animal', },
            ],


            // current: 1,
            // heroes: [
            //     { name: 'Wolverine', universe: 'Marvel' },
            //     { name: 'Batman', universe: 'DC' },
            //     { name: 'Beast', universe: 'Marvel' },
            //     { name: 'Superman', universe: 'DC' },
            //     { name: 'Wonder Woman', universe: 'DC' },
            //     { name: 'Iceman', universe: 'Marvel' },
            //     { name: 'Black Panther', universe: 'Marvel' },
            //     { name: 'Beast Boy', universe: 'DC' },
            //     { name: 'Captain America', universe: 'Marvel' },
            //     { name: 'Hawkgirl', universe: 'DC' },
            //     { name: 'Cyclops', universe: 'Marvel' },
            //     { name: 'Green Lantern', universe: 'DC' },
            //     { name: 'Thor', universe: 'Marvel' },
            //     { name: 'Flash', universe: 'DC' },
            //     { name: 'Spider-man', universe: 'Marvel' },
            //     { name: 'Martian Manhunter', universe: 'DC' },
            //     { name: 'Nightwing', universe: 'DC' },
            //     { name: 'Raven', universe: 'DC' },
            //     { name: 'Hulk', universe: 'Marvel' },
            //     { name: 'Shehulk', universe: 'Marvel' }
            // ],
            // paginate: 5,
            // paginate_total: 0,
            // search_filter: '',
            // status_filter: ''

            // -----
            data: [
                {
                    id: 1,
                    name: "Smart Tivi NanoCell LG 4K 50 inch 50NANO86TPA",
                    soldold: "Còn hàng",
                    vendor: "LG",
                    old_price: "24,900,000đ",
                    price: "20,916,000đ",
                    sale: 0.16,
                    colors: [],
                    image_link: [
                        "//product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_master.png",
                        "//product.hstatic.net/200000516791/product/product_23_2_4935dd9b12f34816a287d5453a9be876_1375950e93174ff09f60f8169ce733da_master.png",
                        "//product.hstatic.net/200000516791/product/product_23_3_e6936a60b48144ceaad1f53a59872d4a_3f238840af0347e7878d2cecef17a53d_master.png",
                        "//product.hstatic.net/200000516791/product/product_27_3_b64ab2ee0acc4c248b7d6c177663bc12_6dff7c9a80db4d77854643f9eafe18d6_master.png"
                    ],
                    thumnail_image_links: [
                        "//product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_compact.png",
                        "//product.hstatic.net/200000516791/product/product_23_2_4935dd9b12f34816a287d5453a9be876_1375950e93174ff09f60f8169ce733da_compact.png",
                        "//product.hstatic.net/200000516791/product/product_23_3_e6936a60b48144ceaad1f53a59872d4a_3f238840af0347e7878d2cecef17a53d_compact.png",
                        "//product.hstatic.net/200000516791/product/product_27_3_b64ab2ee0acc4c248b7d6c177663bc12_6dff7c9a80db4d77854643f9eafe18d6_compact.png"
                    ],
                    description_detail: "<div class=\"description-productdetail\">\n\t\t\t\t\t\t\t\t<p><strong>Đặc điểm nổi bật</strong></p><ul><li><p>Tivi NanoCell LG 4K (3840 x 2160) hiển thị hình ảnh sắc nét, chi tiết</p></li><li><p>Công nghệ NanoCell giúp hình ảnh có màu sắc thuần khiết và tinh tế hơn</p></li><li><p>Bộ xử lý α7 Gen4 Processor 4K phân tích và tối ưu hóa nội dung hiển thị</p></li><li><p>FILMMAKER MODE™ truyền tải phim chân thực như dưới góc nhìn đạo diễn</p></li><li><p>Công nghệ Dolby Atmos mang đến không gian âm thanh vòm sống động</p></li><li><p>Công nghệ AI Sound tinh chỉnh âm thanh dựa trên thể loại nội dung đang xem</p></li><li><p>Tivi LG hỗ trợ tìm kiếm bằng giọng nói giúp tìm kiếm nội dung tiện lợi hơn</p></li></ul><div> </div><h2>Thông số sản phẩm</h2><table id=\"tblGeneralAttribute\" border=\"1\" cellspacing=\"0\" style=\"background-color:#ffffff; border-collapse:collapse; border-spacing:0px; border:1px solid #eeeeee; box-sizing:border-box; color:#333333; font-family:Roboto,sans-serif; font-size:13px; line-height:20px; margin-bottom:20px; max-width:100%; min-width:500px; width:100%\" class=\"mce-item-table table table-bordered\"><tbody style=\"box-sizing: border-box;\"><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Model</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\"><table><tbody><tr><td><table><tbody><tr><td>50NANO86TPA</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\"><table><tbody><tr><td>Nhà sản xuất</td></tr></tbody></table></td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">LG</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\"><table><tbody><tr><td>Xuất xứ</td></tr></tbody></table></td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">Indonesia</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Năm ra mắt</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">2021</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Thời gian bảo hành</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">24 tháng</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Loại Tivi</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">Tivi NanoCell</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Kích thước màn hình</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">50 inch</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Độ phân giải</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">4K (3840 x 2160) Pixels</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Công nghệ xử lí hình ảnh</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">X1 4K Processor, Direct LED Frame Dimming, HLG, Motionflow XR 200, HDR10, Auto Mode, 4K X-Reality PRO</td></tr></tbody></table>\n\t\t\t\t\t\t\t</div>"
                },
                {
                    id: 2,
                    name: "Google Tivi Sony 4K 50 inch KD-50X80J/S VN3",
                    soldold: "Hết hàng",
                    vendor: "Sony",
                    price: "19,250,000₫",
                    old_price: "21,500,000₫",
                    colors: [],
                    image_link: [
                        "//product.hstatic.net/200000516791/product/product_8_1_40a8adab1068450fa2c5193e55c449db_d2eb31bffb6f40f4a7990c5383cc235b_master.png",
                        "//product.hstatic.net/200000516791/product/product_8_3_de5aa5a17f7941e19996b5e52e091ebc_53258e65e61f43ae840b978a94744d23_master.png",
                        "//product.hstatic.net/200000516791/product/product_8_2_cdfa4e6e1fac41dbb9b9e29f433a5cf4_5fae594f6bfc409aae61492b905e6e9e_master.png",
                        "//product.hstatic.net/200000516791/product/product_8_4_796f81fdeeb34b71830ed1476593fb3c_f9aff1fcfca8487d9a510e6356a08ad5_master.png"
                    ],
                    thumnail_image_links: [
                        "//product.hstatic.net/200000516791/product/product_8_1_40a8adab1068450fa2c5193e55c449db_d2eb31bffb6f40f4a7990c5383cc235b_compact.png",
                        "//product.hstatic.net/200000516791/product/product_8_3_de5aa5a17f7941e19996b5e52e091ebc_53258e65e61f43ae840b978a94744d23_compact.png",
                        "//product.hstatic.net/200000516791/product/product_8_2_cdfa4e6e1fac41dbb9b9e29f433a5cf4_5fae594f6bfc409aae61492b905e6e9e_compact.png",
                        "//product.hstatic.net/200000516791/product/product_8_4_796f81fdeeb34b71830ed1476593fb3c_f9aff1fcfca8487d9a510e6356a08ad5_compact.png"
                    ],
                    description_detail: "<div class=\"description-productdetail\">\n\t\t\t\t\t\t\t\t<p><strong>Đặc điểm nổi bật</strong></p><ul><li><p>Tivi Sony có độ phân giải 4K hiển thị hình ảnh sắc nét gấp 4 lần Full HD</p></li><li><p>Công nghệ 4K X-Reality PRO tự động nâng cấp hình ảnh lên 4K sắc nét</p></li><li><p>Công nghệ Triluminos Pro tái hiện dải màu rộng, màu sắc rực rỡ, tự nhiên</p></li><li><p>Cảnh hành động nhanh mượt mà hơn nhờ công nghệ Motionflow XR 800</p></li><li><p>Thiết kế loa bất đối xứng X-Balanced Speaker cho âm thanh chất lượng cao</p></li><li><p>Công nghệ Room compensation tối ưu hóa âm thanh trong phòng theo vị trí ngồi</p></li><li><p>Chia sẻ nội dung từ điện thoại lên màn hình TV qua Chromecast, Apple Airplay</p></li></ul><div> </div><h2>Thông số sản phẩm</h2><table id=\"tblGeneralAttribute\" border=\"1\" cellspacing=\"0\" style=\"background-color:#ffffff; border-collapse:collapse; border-spacing:0px; border:1px solid #eeeeee; box-sizing:border-box; color:#333333; font-family:Roboto,sans-serif; font-size:13px; line-height:20px; margin-bottom:20px; max-width:100%; min-width:500px; width:100%\" class=\"mce-item-table table table-bordered\"><tbody style=\"box-sizing: border-box;\"><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Model</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\"><table><tbody><tr><td><table><tbody><tr><td>KD-50X80J/S</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\"><table><tbody><tr><td>Nhà sản xuất</td></tr></tbody></table></td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">Sony</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\"><table><tbody><tr><td>Xuất xứ</td></tr></tbody></table></td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">Malaysia</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Năm ra mắt</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">2021</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Thời gian bảo hành</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">24 tháng</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Loại Tivi</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\"><table><tbody><tr><td>4K HDR GoogleTV</td></tr></tbody></table></td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Kích thước màn hình</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">43 inch</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Độ phân giải</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">4K (3840 x 2160) Pixels</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Công nghệ xử lí hình ảnh</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">X1 4K Processor, Direct LED Frame Dimming, HLG, Motionflow XR 200, HDR10, Auto Mode, 4K X-Reality PRO</td></tr></tbody></table>\n\t\t\t\t\t\t\t</div>"
                },
                {
                    id: 2,
                    name: "Google Tivi Sony 4K 50 inch KD-50X80J/S VN3",
                    soldold: "Hết hàng",
                    vendor: "Sony",
                    price: "19,250,000₫",
                    old_price: "21,500,000₫",
                    colors: [],
                    image_link: [
                        "//product.hstatic.net/200000516791/product/product_8_1_40a8adab1068450fa2c5193e55c449db_d2eb31bffb6f40f4a7990c5383cc235b_master.png",
                        "//product.hstatic.net/200000516791/product/product_8_3_de5aa5a17f7941e19996b5e52e091ebc_53258e65e61f43ae840b978a94744d23_master.png",
                        "//product.hstatic.net/200000516791/product/product_8_2_cdfa4e6e1fac41dbb9b9e29f433a5cf4_5fae594f6bfc409aae61492b905e6e9e_master.png",
                        "//product.hstatic.net/200000516791/product/product_8_4_796f81fdeeb34b71830ed1476593fb3c_f9aff1fcfca8487d9a510e6356a08ad5_master.png"
                    ],
                    thumnail_image_links: [
                        "//product.hstatic.net/200000516791/product/product_8_1_40a8adab1068450fa2c5193e55c449db_d2eb31bffb6f40f4a7990c5383cc235b_compact.png",
                        "//product.hstatic.net/200000516791/product/product_8_3_de5aa5a17f7941e19996b5e52e091ebc_53258e65e61f43ae840b978a94744d23_compact.png",
                        "//product.hstatic.net/200000516791/product/product_8_2_cdfa4e6e1fac41dbb9b9e29f433a5cf4_5fae594f6bfc409aae61492b905e6e9e_compact.png",
                        "//product.hstatic.net/200000516791/product/product_8_4_796f81fdeeb34b71830ed1476593fb3c_f9aff1fcfca8487d9a510e6356a08ad5_compact.png"
                    ],
                    description_detail: "<div class=\"description-productdetail\">\n\t\t\t\t\t\t\t\t<p><strong>Đặc điểm nổi bật</strong></p><ul><li><p>Tivi Sony có độ phân giải 4K hiển thị hình ảnh sắc nét gấp 4 lần Full HD</p></li><li><p>Công nghệ 4K X-Reality PRO tự động nâng cấp hình ảnh lên 4K sắc nét</p></li><li><p>Công nghệ Triluminos Pro tái hiện dải màu rộng, màu sắc rực rỡ, tự nhiên</p></li><li><p>Cảnh hành động nhanh mượt mà hơn nhờ công nghệ Motionflow XR 800</p></li><li><p>Thiết kế loa bất đối xứng X-Balanced Speaker cho âm thanh chất lượng cao</p></li><li><p>Công nghệ Room compensation tối ưu hóa âm thanh trong phòng theo vị trí ngồi</p></li><li><p>Chia sẻ nội dung từ điện thoại lên màn hình TV qua Chromecast, Apple Airplay</p></li></ul><div> </div><h2>Thông số sản phẩm</h2><table id=\"tblGeneralAttribute\" border=\"1\" cellspacing=\"0\" style=\"background-color:#ffffff; border-collapse:collapse; border-spacing:0px; border:1px solid #eeeeee; box-sizing:border-box; color:#333333; font-family:Roboto,sans-serif; font-size:13px; line-height:20px; margin-bottom:20px; max-width:100%; min-width:500px; width:100%\" class=\"mce-item-table table table-bordered\"><tbody style=\"box-sizing: border-box;\"><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Model</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\"><table><tbody><tr><td><table><tbody><tr><td>KD-50X80J/S</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\"><table><tbody><tr><td>Nhà sản xuất</td></tr></tbody></table></td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">Sony</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\"><table><tbody><tr><td>Xuất xứ</td></tr></tbody></table></td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">Malaysia</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Năm ra mắt</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">2021</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Thời gian bảo hành</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">24 tháng</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Loại Tivi</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\"><table><tbody><tr><td>4K HDR GoogleTV</td></tr></tbody></table></td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Kích thước màn hình</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">43 inch</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Độ phân giải</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">4K (3840 x 2160) Pixels</td></tr><tr style=\"box-sizing:border-box\" class=\"row-info\"><td style=\"background-color:#f7f7f7 !important; border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:22.7596%\">Công nghệ xử lí hình ảnh</td><td style=\"border-color:#eeeeee; border-style:solid; border-width:1px; box-sizing:border-box; padding:8px; vertical-align:top; width:77.0982%\">X1 4K Processor, Direct LED Frame Dimming, HLG, Motionflow XR 200, HDR10, Auto Mode, 4K X-Reality PRO</td></tr></tbody></table>\n\t\t\t\t\t\t\t</div>"
                },
            ],
            perPage: 1,
            pagination: {}
        }
    },
    methods: {
        onClick(i) {
            this.model = i
            console.log(i);
        },
        // setPaginate: function (i) {
        //     if (this.current == 1) {
        //         return i < this.paginate;
        //     }
        //     else {
        //         return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
        //     }
        // },
        // setStatus: function (status) {
        //     this.status_filter = status;
        //     this.$nextTick(function () {
        //         this.updatePaginate();
        //     });
        // },
        // updateCurrent: function (i) {
        //     this.current = i;
        // },
        // updatePaginate: function () {
        //     this.current = 1;
        //     this.paginate_total = Math.ceil(document.querySelectorAll('tbody tr').length / this.paginate);
        // },


        setPage(p) {
            this.pagination = this.paginator(this.data.length, p);
            console.log(this.pagination);
        },
        paginate(data) {
            return data.slice(this.pagination.startIndex, this.pagination.endIndex + 1)
        },
        paginator(totalItems, currentPage) {
            let startIndex = (currentPage - 1) * this.perPage
            let endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
            return {
                currentPage: currentPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
            };
        }
    },
    computed: {
        collection() {
            return this.paginate(this.data);
        }
    },
    created() {
        // this.paginate_total = this.heroes.length / this.paginate;
        this.setPage(1);
    },

    selectedItems: function () {
        return this.items.filter(function (item) {
            return this.categories.includes(item.category);
        });
    },
}
</script>
<style scoped>
.v-img {
    display: flex;
}

table thead {
    font-weight: bold;
    font-size: 20px;
}
</style>