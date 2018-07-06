package com.uparis.db.constant;

public enum TypeOrderStatus {
    // 初始化
    INIT,

    // 等待付款
    PENDING,

    // 退款,
    REFUND,

    //成功
    SUCCESS,

    // 失败
    FAILURE,

    // 候补
    WAITING_LIST
}
