var CardDefines;
(function (CardDefines) {
    /** 玩家选中一张牌，牌弹出动画的时间 */
    CardDefines.XuanPai_Tween_Duration = 100;
    (function (BattleConst) {
        BattleConst[BattleConst["PLAY_CARD_COUNT"] = 13] = "PLAY_CARD_COUNT";
        BattleConst[BattleConst["NUMBER_CARD_COUNT"] = 9] = "NUMBER_CARD_COUNT";
        BattleConst[BattleConst["ZI_CARD_COUNT"] = 7] = "ZI_CARD_COUNT";
        BattleConst[BattleConst["HUA_CARD_COUNT"] = 8] = "HUA_CARD_COUNT";
        BattleConst[BattleConst["ONE_CARD_MAX"] = 4] = "ONE_CARD_MAX";
        BattleConst[BattleConst["EX_CARD_COUNT_MAX"] = 8] = "EX_CARD_COUNT_MAX";
        BattleConst[BattleConst["INVALID_ROLEID"] = -1] = "INVALID_ROLEID";
    })(CardDefines.BattleConst || (CardDefines.BattleConst = {}));
    var BattleConst = CardDefines.BattleConst;
    /**
     * 牌值 11-19 wan 21-29tiao 31-39 tong
     */
    (function (CardType) {
        CardType[CardType["Invalid"] = -1] = "Invalid";
        /** 万 */
        CardType[CardType["Wan"] = 1] = "Wan";
        /** 条 */
        CardType[CardType["Tiao"] = 11] = "Tiao";
        /** 筒 */
        CardType[CardType["Tong"] = 21] = "Tong";
        /** 字牌, 东南西北中发白 */
        CardType[CardType["Zi"] = 31] = "Zi";
        /** 花牌, 梅兰竹菊春夏秋冬 */
        CardType[CardType["Hua"] = 41] = "Hua";
        /** 总数量 */
        CardType[CardType["TotalCount"] = 49] = "TotalCount";
    })(CardDefines.CardType || (CardDefines.CardType = {}));
    var CardType = CardDefines.CardType;
    (function (Chair) {
        Chair[Chair["Invalid"] = -1] = "Invalid";
        Chair[Chair["Start"] = 0] = "Start";
        Chair[Chair["Down"] = 0] = "Down";
        Chair[Chair["Right"] = 1] = "Right";
        Chair[Chair["Top"] = 2] = "Top";
        Chair[Chair["Left"] = 3] = "Left";
        Chair[Chair["Max"] = 3] = "Max";
    })(CardDefines.Chair || (CardDefines.Chair = {}));
    var Chair = CardDefines.Chair;
    // 逆时针方向
    CardDefines.CHAIR_MAP = (_a = {},
        _a[0] = CardDefines.Chair.Down,
        _a[1] = CardDefines.Chair.Right,
        _a[2] = CardDefines.Chair.Top,
        _a[3] = CardDefines.Chair.Left,
        _a
    );
    (function (CardState) {
        CardState[CardState["Invalid"] = -1] = "Invalid";
        /** 手牌 */
        CardState[CardState["Shoupai"] = 0] = "Shoupai";
        /** 已出牌 */
        CardState[CardState["Chupai"] = 1] = "Chupai";
        /** 碰牌 */
        CardState[CardState["Pengpai"] = 2] = "Pengpai";
        /** 明杠, */
        CardState[CardState["GangPai"] = 3] = "GangPai";
        /** 暗杠 */
        CardState[CardState["GangPai2"] = 4] = "GangPai2";
        /**吃牌 */
        CardState[CardState["ChiPai"] = 5] = "ChiPai";
        /**财神 */
        CardState[CardState["HuaPai"] = 6] = "HuaPai";
        /**奖马赢的牌 */
        CardState[CardState["Ma_Win"] = 7] = "Ma_Win";
        /**奖马输的牌 */
        CardState[CardState["Ma_Lose"] = 8] = "Ma_Lose";
    })(CardDefines.CardState || (CardDefines.CardState = {}));
    var CardState = CardDefines.CardState;
    /**
     * 对应着麻将的排放方式
     */
    (function (BackGroundType) {
        BackGroundType[BackGroundType["Invalid"] = -1] = "Invalid";
        /**标准放置 下方横排 */
        BackGroundType[BackGroundType["Stand"] = 0] = "Stand";
        /**标准放置 上方横排 */
        BackGroundType[BackGroundType["Stand_Top"] = 1] = "Stand_Top";
        /**标准放置 左方竖排 */
        BackGroundType[BackGroundType["Stand_Left"] = 2] = "Stand_Left";
        /**标准放置 右方竖排 */
        BackGroundType[BackGroundType["Stand_Right"] = 3] = "Stand_Right";
        /**平放，正面朝上 */
        BackGroundType[BackGroundType["Lie_Sur"] = 4] = "Lie_Sur";
        /**平放，正面朝上，周围有黄色光晕 */
        BackGroundType[BackGroundType["Lie_Sur_Glow_Yellow"] = 5] = "Lie_Sur_Glow_Yellow";
        /**平放，正面朝上，周围有紫色光晕 */
        BackGroundType[BackGroundType["Lie_Sur_Glow_Purple"] = 6] = "Lie_Sur_Glow_Purple";
        /**平放，背面朝上 */
        BackGroundType[BackGroundType["Lie_Back"] = 7] = "Lie_Back";
        /**横着平放，正面朝上  */
        BackGroundType[BackGroundType["Lie_H_Sur"] = 8] = "Lie_H_Sur";
        /**横着平放，正面朝上，周围有黄色光晕  */
        BackGroundType[BackGroundType["Lie_H_Sur_Glow_Yellow"] = 9] = "Lie_H_Sur_Glow_Yellow";
        /**横着平放，正面朝上，周围有紫色光晕  */
        BackGroundType[BackGroundType["Lie_H_Sur_Glow_Purple"] = 10] = "Lie_H_Sur_Glow_Purple";
        /**横着平放，背面朝上  */
        BackGroundType[BackGroundType["Lie_H_Back"] = 11] = "Lie_H_Back";
        /**枚举数量，不要使用 */
        BackGroundType[BackGroundType["COUNT"] = 12] = "COUNT";
    })(CardDefines.BackGroundType || (CardDefines.BackGroundType = {}));
    var BackGroundType = CardDefines.BackGroundType;
    (function (ButtonType) {
        ButtonType[ButtonType["Pass"] = 1] = "Pass";
        ButtonType[ButtonType["Gang"] = 2] = "Gang";
        ButtonType[ButtonType["Peng"] = 3] = "Peng";
        ButtonType[ButtonType["Ting"] = 4] = "Ting";
        ButtonType[ButtonType["Hu"] = 5] = "Hu";
    })(CardDefines.ButtonType || (CardDefines.ButtonType = {}));
    var ButtonType = CardDefines.ButtonType;
    /**角标类型，默认鬼牌  一般一个地区中只有两种角标*/
    (function (CornerType) {
        CornerType[CornerType["Invalid"] = -1] = "Invalid";
        CornerType[CornerType["Default"] = 0] = "Default";
        CornerType[CornerType["GuiPai"] = 0] = "GuiPai";
        CornerType[CornerType["ZhengPai"] = 1] = "ZhengPai";
        // Count必须正确
        CornerType[CornerType["Count"] = 2] = "Count";
    })(CardDefines.CornerType || (CardDefines.CornerType = {}));
    var CornerType = CardDefines.CornerType;
    /** 获取指定牌的类型 */
    function getCardType(cardNumber) {
        if (cardNumber >= CardType.Wan && cardNumber < CardType.Wan + BattleConst.NUMBER_CARD_COUNT)
            return CardType.Wan;
        else if (cardNumber >= CardType.Tiao && cardNumber < CardType.Tiao + BattleConst.NUMBER_CARD_COUNT)
            return CardType.Tiao;
        else if (cardNumber >= CardType.Tong && cardNumber < CardType.Tong + BattleConst.NUMBER_CARD_COUNT)
            return CardType.Tong;
        else if (cardNumber >= CardType.Zi && cardNumber < CardType.Zi + BattleConst.ZI_CARD_COUNT)
            return CardType.Tong;
        else if (cardNumber >= CardType.Hua && cardNumber < CardType.Hua + BattleConst.HUA_CARD_COUNT)
            return CardType.Tong;
        return CardType.Invalid;
    }
    CardDefines.getCardType = getCardType;
    /** 获取一个牌值是否为有效值 */
    function isValidCardNumber(cardNumber) {
        return cardNumber > 0 && cardNumber < CardDefines.CardType.TotalCount;
    }
    CardDefines.isValidCardNumber = isValidCardNumber;
    var _a;
})(CardDefines || (CardDefines = {}));
//# sourceMappingURL=CardDefine.js.map