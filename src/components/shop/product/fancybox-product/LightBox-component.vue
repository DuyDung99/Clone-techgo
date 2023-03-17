<template>
    <div>
        <button @click="showMultiple">Show a group of pictures.</button>

        <!-- all props & events -->
        <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
    </div>

    <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
</template>
<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            search: '',
            imgs: '', // Img Url , string or Array of string
            visible: false,
            index: 0, // default: 0
            data: {
                name: "Smart Tivi NanoCell LG 4K 50 inch 50NANO86TPA",
                soldold: "Còn hàng",
                vendor: "LG",
                old_price: "24900000",
                price: "20850000",
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
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: 1,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: 1,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: 7,
                },
            ]
        }
    },
    methods: {

        // showSingle() {
        //     this.imgs = 'http://product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_master.png'
        //     // or
        //     this.imgs = {
        //         title: 'this is a placeholder',
        //         src: 'http:////product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_master.png'
        //     }
        //     this.show()
        // },
        showMultiple() {
            this.imgs = this.data.image_link
            // or
            // this.imgs = [
            //     { src: 'http://product.hstatic.net/200000516791/product/product_23_3_e6936a60b48144ceaad1f53a59872d4a_3f238840af0347e7878d2cecef17a53d_master.png' },
            //     'http:////product.hstatic.net/200000516791/product/product_28_1_5043e2df20164cd1a4dbca5bb832937f_178c708a80114db18ee385c6f26fa0eb_master.png'
            // ]
            // allow mixing

            this.index = 0 // index of imgList
            this.show()
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }
}
</script>