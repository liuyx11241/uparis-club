package com.uparis.mvc;

import com.uparis.dto.*;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class MockRepo {

    public ProductDto productDto() {
        ProductDto product1 = new ProductDto();
        product1.setId(2L);
        product1.setName("name1");
        product1.setDuration(7);
        product1.setAlias("ski1");
        product1.setShortDescription("SKI in Short Description");
        product1.setLongDescription("SKI in Long Description");
        product1.getListTrip().addAll(Arrays.asList(mockTrip()));
        product1.getListItinerary().addAll(itineraryDtos());
        product1.getListPicture().addAll(pictureDtos());

        return product1;
    }

    public List<ProductDto> productDtos() {
        ProductDto product1 = new ProductDto();
        product1.setId(1L);
        product1.setName("name1");
        product1.setDuration(7);
        product1.setAlias("ski1");
        product1.setShortDescription("SKI in Short Description");
        product1.setLongDescription("SKI in Long Description");
        product1.setListPicture(pictureDtos());

        ProductDto product2 = new ProductDto();
        product2.setId(2L);
        product2.setName("name2");
        product2.setDuration(7);
        product2.setAlias("tmb1");
        product2.setShortDescription("Tour du mont blanc in short Description");
        product2.setLongDescription("Tour du mont blanc in Long Description");
        product2.setListPicture(pictureDtos());

        return Arrays.asList(product1, product2, product1, product2, product1, product2, product1);
    }

    public List<ItineraryDto> itineraryDtos() {
        ItineraryDto itinerary1 = new ItineraryDto();
        itinerary1.setId(1L);
        itinerary1.setDayStart(1);
        itinerary1.setDuration(1);
        itinerary1.setIdProduct(1L);
        itinerary1.setMovement("巴黎 － 卡塔尼亚");
        itinerary1.setListSchedule(Arrays.asList(
                new ScheduleDto(1L, "07:00", 1, "乘坐飞机前往卡塔尼亚"),
                new ScheduleDto(2L, null, 2, "乘水陆交通，抵达利帕里岛"),
                new ScheduleDto(3L, null, 3, "利帕里岛环岛徒步，高处可观赏海上众火山岛风光。"),
                new ScheduleDto(4L, null, 4, "3h30徒步，海拔升降400米")));

        ItineraryDto itinerary2 = new ItineraryDto();
        itinerary2.setId(2L);
        itinerary2.setDayStart(2);
        itinerary2.setDuration(1);
        itinerary2.setIdProduct(1L);
        itinerary2.setMovement("利帕里岛－火山岛");
        itinerary2.setListSchedule(Arrays.asList(
                new ScheduleDto(1L, null, 1, "乘船前往以硫磺气孔出名的火山岛"),
                new ScheduleDto(1L, null, 2, "途中观赏巍峨火山岩石，远观大海一路爬升"),
                new ScheduleDto(1L, null, 3, "徒步至山顶会看到壮观的硫磺气孔，以及闻到浓浓的硫磺味"),
                new ScheduleDto(1L, null, 4, "下午享受天然火山泥浴后乘船回利帕里"),
                new ScheduleDto(1L, null, 5, "4h徒步，海拔升降450米")));

        ItineraryDto itinerary3 = new ItineraryDto();
        itinerary3.setId(3L);
        itinerary3.setDayStart(3);
        itinerary3.setDuration(1);
        itinerary3.setIdProduct(1L);
        itinerary3.setMovement("利帕里岛－斯特魔波利岛");
        itinerary3.setListSchedule(Arrays.asList(
                new ScheduleDto(1L, null, 1, "乘船前往意大利最活跃的火山岛斯特魔波利岛，远处便看到山顶浓烟滚滚，每20分钟喷发一次的小岛，会给你带来前所未有的震撼"),
                new ScheduleDto(1L, null, 2, "跟当地向导汇合后租赁装备登顶火山口"),
                new ScheduleDto(1L, null, 3, "天黑后在山顶火山口守候火山喷发出的红色岩浆，感受大地的脉动"),
                new ScheduleDto(1L, null, 4, "7h徒步，海拔升降900米")));

        ItineraryDto itinerary4 = new ItineraryDto();
        itinerary4.setId(4L);
        itinerary4.setDayStart(4);
        itinerary4.setDuration(1);
        itinerary4.setIdProduct(1L);
        itinerary4.setMovement("斯特魔波利岛－卡塔尼亚");
        itinerary4.setListSchedule(Arrays.asList(
                new ScheduleDto(1L, null, 1, "乘水陆回程卡塔尼亚，欣赏西西里众岛的美丽海景。")));

        ItineraryDto itinerary5 = new ItineraryDto();
        itinerary5.setId(5L);
        itinerary5.setDayStart(5);
        itinerary5.setDuration(1);
        itinerary5.setIdProduct(1L);
        itinerary5.setMovement("埃特纳火山");
        itinerary5.setListSchedule(Arrays.asList(
                new ScheduleDto(1L, null, 1, "乘车前往埃特纳火山下"),
                new ScheduleDto(1L, null, 2, "跟随专业向导火山溶岩洞穴探险"),
                new ScheduleDto(1L, null, 3, "埃特纳火山徒步，感受埃特纳火山的惊艳景色"),
                new ScheduleDto(1L, null, 4, "3h徒步，海拔升降400米")));

        ItineraryDto itinerary6 = new ItineraryDto();
        itinerary6.setId(6L);
        itinerary6.setDayStart(6);
        itinerary6.setDuration(2);
        itinerary6.setIdProduct(1L);
        itinerary6.setMovement("卡塔尼亚 – 陶尔米纳 – 卡塔尼亚");
        itinerary6.setListSchedule(Arrays.asList(
                new ScheduleDto(1L, null, 1, "乘火车前往陶尔米纳海边小镇"),
                new ScheduleDto(1L, null, 2, "陶尔米纳小镇徒步，享受美食、海水与阳光"),
                new ScheduleDto(1L, null, 3, "下午乘火车返回卡塔尼亚"),
                new ScheduleDto(1L, null, 4, "卡塔尼亚城市观光")));

        ItineraryDto itinerary7 = new ItineraryDto();
        itinerary7.setId(7L);
        itinerary7.setDayStart(8);
        itinerary7.setDuration(1);
        itinerary7.setIdProduct(1L);
        itinerary7.setMovement("卡塔尼亚－巴黎");
        itinerary7.setListSchedule(Arrays.asList(
                new ScheduleDto(1L, null, 1, "白天继续卡塔尼亚城市观光"),
                new ScheduleDto(1L, null, 2, "傍晚乘飞机返回巴黎")));

        return Arrays.asList(itinerary1, itinerary2, itinerary3, itinerary4, itinerary5, itinerary6, itinerary7);
    }

    private List<PictureDto> pictureDtos() {
        return Arrays.asList(
                new PictureDto(1L, 1L, "https://source.unsplash.com/random/900x900", null, "10 seconds between slides...", "This carousel uses customized default values."),
                new PictureDto(2L, 1L, "https://source.unsplash.com/random/800x800", null, "No keyboard...", "This carousel uses customized default values."),
                new PictureDto(3L, 1L, "https://source.unsplash.com/random/600x600", null, "And no wrap after last slide.", "This carousel uses customized default values."));
    }


    public static TripDto[] mockTrip() {
        TripDto tripDto1 = new TripDto("16/06/2018", "22/06/2018", 14);
        tripDto1.setId(1L);
        tripDto1.setMainPrice(PriceDto.valueOf(BigDecimal.valueOf(388), "EUR"));
        tripDto1.setNameProduct("SKI");
        tripDto1.getMappedListOption()
                .putAll(optionDtos1().stream().collect(Collectors.groupingBy(OptionDto::getLevel, Collectors.toList())));

        TripDto tripDto2 = new TripDto("16/07/2018", "22/07/2018", 7);
        tripDto2.setId(2L);
        tripDto2.setNameProduct("Tour du mont blanc");
        tripDto2.setMainPrice(PriceDto.valueOf(BigDecimal.valueOf(388), "EUR"));
        tripDto2.getMappedListOption()
                .putAll(optionDtos2().stream().collect(Collectors.groupingBy(OptionDto::getLevel, Collectors.toList())));

        return new TripDto[]{tripDto1, tripDto2};
    }

    private static List<OptionDto> optionDtos1() {
        return Arrays.asList(
                OptionDto.valueOf(1L, "ow", 1, 1, BigDecimal.valueOf(396), "EUR", 1L, 8, "PADI OW"),
                OptionDto.valueOf(1L, "aow", 1, 2, BigDecimal.valueOf(313), "EUR", 1L, 8, null),
                OptionDto.valueOf(1L, "Fun Dive", 1, 3, BigDecimal.valueOf(325), "EUR", 1L, 8, "Fun Dive"),
                OptionDto.valueOf(1L, "Surf", 1, 4, BigDecimal.valueOf(180), "EUR", 2L, 10, null)
        );
    }

    private static List<OptionDto> optionDtos2() {
        return Arrays.asList(
                OptionDto.valueOf(1L, "ow", 1, 1, BigDecimal.valueOf(100), "EUR"),
                OptionDto.valueOf(1L, "aow", 1, 2, BigDecimal.valueOf(200), "EUR", 4L, 5, null),
                OptionDto.valueOf(1L, "fun dive", 2, 3, BigDecimal.valueOf(300), "EUR"),
                OptionDto.valueOf(1L, "Surf", 2, 4, BigDecimal.valueOf(150), "EUR", 3L, 3, null),
                OptionDto.valueOf(1L, "With Car", 3, 4, BigDecimal.valueOf(6), "EUR", 6L, 2, null),
                OptionDto.valueOf(1L, "without car", 3, 4, BigDecimal.valueOf(9), "EUR")
        );
    }
}
