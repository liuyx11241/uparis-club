package com.uparis.mvc;

import com.uparis.dto.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping
    public List<ProductDto> getAllProducts() {
        ProductDto product1 = new ProductDto();
        product1.setId("1");
        product1.setName("name1");
        product1.setDuration(7);
        product1.setAlias("ski1");
        product1.setShortDescription("SKI in Short Description");
        product1.setLongDescription("SKI in Long Description");

        ProductDto product2 = new ProductDto();
        product2.setId("2");
        product2.setName("name2");
        product2.setDuration(7);
        product2.setAlias("tmb1");
        product2.setShortDescription("Tour du mont blanc in short Description");
        product2.setLongDescription("Tour du mont blanc in Long Description");

        return Arrays.asList(product1, product2);
    }

    @GetMapping("/{id}")
    public ProductDto getProduct(@PathVariable("id") String idProduct) {
        ProductDto product1 = new ProductDto();
        product1.setId(idProduct);
        product1.setName("name1");
        product1.setDuration(7);
        product1.setAlias("ski1");
        product1.setShortDescription("SKI in Short Description");
        product1.setLongDescription("SKI in Long Description");
        product1.getListTrip().addAll(Arrays.asList(
            new TripDto("16/06/2018", "22/06/2018", 7),
            new TripDto("16/07/2018", "22/07/2018", 7)
                                                   ));
        product1.getListItinerary().addAll(itineraryDtos());
        product1.getListPicture().addAll(pictureDtos());
        return product1;
    }

    private List<ItineraryDto> itineraryDtos() {
        ItineraryDto itinerary1 = new ItineraryDto();
        itinerary1.setId("1");
        itinerary1.setDayStart(1);
        itinerary1.setDayEnd(1);
        itinerary1.setIdProduct("1");
        itinerary1.setMovement("巴黎 － 卡塔尼亚");
        itinerary1.setListSchedule(Arrays.asList(
            new ScheduleDto("1", "7:00", 1, "乘坐飞机前往卡塔尼亚"),
            new ScheduleDto("2", null, 2, "乘水陆交通，抵达利帕里岛"),
            new ScheduleDto("3", null, 3, "利帕里岛环岛徒步，高处可观赏海上众火山岛风光。"),
            new ScheduleDto("4", null, 4, "3h30徒步，海拔升降400米")));

        ItineraryDto itinerary2 = new ItineraryDto();
        itinerary2.setId("2");
        itinerary2.setDayStart(2);
        itinerary2.setDayEnd(2);
        itinerary2.setIdProduct("1");
        itinerary2.setMovement("利帕里岛－火山岛");
        itinerary2.setListSchedule(Arrays.asList(
            new ScheduleDto("1", null, 1, "乘船前往以硫磺气孔出名的火山岛"),
            new ScheduleDto("1", null, 2, "途中观赏巍峨火山岩石，远观大海一路爬升"),
            new ScheduleDto("1", null, 3, "徒步至山顶会看到壮观的硫磺气孔，以及闻到浓浓的硫磺味"),
            new ScheduleDto("1", null, 4, "下午享受天然火山泥浴后乘船回利帕里"),
            new ScheduleDto("1", null, 5, "4h徒步，海拔升降450米")));

        ItineraryDto itinerary3 = new ItineraryDto();
        itinerary3.setId("3");
        itinerary3.setDayStart(3);
        itinerary3.setDayEnd(3);
        itinerary3.setIdProduct("1");
        itinerary3.setMovement("利帕里岛－斯特魔波利岛");
        itinerary3.setListSchedule(Arrays.asList(
            new ScheduleDto("1", null, 1, "乘船前往意大利最活跃的火山岛斯特魔波利岛，远处便看到山顶浓烟滚滚，每20分钟喷发一次的小岛，会给你带来前所未有的震撼"),
            new ScheduleDto("1", null, 2, "跟当地向导汇合后租赁装备登顶火山口"),
            new ScheduleDto("1", null, 3, "天黑后在山顶火山口守候火山喷发出的红色岩浆，感受大地的脉动"),
            new ScheduleDto("1", null, 4, "7h徒步，海拔升降900米")));

        ItineraryDto itinerary4 = new ItineraryDto();
        itinerary4.setId("4");
        itinerary4.setDayStart(4);
        itinerary4.setDayEnd(4);
        itinerary4.setIdProduct("1");
        itinerary4.setMovement("斯特魔波利岛－卡塔尼亚");
        itinerary4.setListSchedule(Arrays.asList(
            new ScheduleDto("1", null, 1, "乘水陆回程卡塔尼亚，欣赏西西里众岛的美丽海景。")));

        ItineraryDto itinerary5 = new ItineraryDto();
        itinerary5.setId("5");
        itinerary5.setDayStart(5);
        itinerary5.setDayEnd(5);
        itinerary5.setIdProduct("1");
        itinerary5.setMovement("埃特纳火山");
        itinerary5.setListSchedule(Arrays.asList(
            new ScheduleDto("1", null, 1, "乘车前往埃特纳火山下"),
            new ScheduleDto("1", null, 2, "跟随专业向导火山溶岩洞穴探险"),
            new ScheduleDto("1", null, 3, "埃特纳火山徒步，感受埃特纳火山的惊艳景色"),
            new ScheduleDto("1", null, 4, "3h徒步，海拔升降400米")));

        ItineraryDto itinerary6 = new ItineraryDto();
        itinerary6.setId("6");
        itinerary6.setDayStart(6);
        itinerary6.setDayEnd(7);
        itinerary6.setIdProduct("1");
        itinerary6.setMovement("卡塔尼亚 – 陶尔米纳 – 卡塔尼亚");
        itinerary6.setListSchedule(Arrays.asList(
            new ScheduleDto("1", null, 1, "乘火车前往陶尔米纳海边小镇"),
            new ScheduleDto("1", null, 2, "陶尔米纳小镇徒步，享受美食、海水与阳光"),
            new ScheduleDto("1", null, 3, "下午乘火车返回卡塔尼亚"),
            new ScheduleDto("1", null, 4, "卡塔尼亚城市观光")));

        ItineraryDto itinerary7 = new ItineraryDto();
        itinerary7.setId("7");
        itinerary7.setDayStart(8);
        itinerary7.setDayEnd(8);
        itinerary7.setIdProduct("1");
        itinerary7.setMovement("卡塔尼亚－巴黎");
        itinerary7.setListSchedule(Arrays.asList(
            new ScheduleDto("1", null, 1, "白天继续卡塔尼亚城市观光"),
            new ScheduleDto("1", null, 2, "傍晚乘飞机返回巴黎")));

        return Arrays.asList(itinerary1, itinerary2, itinerary3, itinerary4, itinerary5, itinerary6, itinerary7);
    }

    private List<PictureDto> pictureDtos() {
        return Arrays.asList(
            new PictureDto("1", "1", "https://source.unsplash.com/random/600x600", null, "10 seconds between slides...", "This carousel uses customized default values."),
            new PictureDto("2", "1", "https://source.unsplash.com/random/600x600", null, "No keyboard...", "This carousel uses customized default values."),
            new PictureDto("3", "1", "https://source.unsplash.com/random/600x600", null, "And no wrap after last slide.", "This carousel uses customized default values."));
    }

}
