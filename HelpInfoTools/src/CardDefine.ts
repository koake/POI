module CardDefines {

        /** 玩家选中一张牌，牌弹出动画的时间 */
        export const XuanPai_Tween_Duration = 100;

        export enum BattleConst {
            PLAY_CARD_COUNT = 13,
            NUMBER_CARD_COUNT = 9,
            ZI_CARD_COUNT = 7,
            HUA_CARD_COUNT = 8,
            ONE_CARD_MAX = 4,
            EX_CARD_COUNT_MAX = 8,
            INVALID_ROLEID = -1,
        }

        /**
         * 牌值 11-19 wan 21-29tiao 31-39 tong
         */
        export enum CardType {
            Invalid = -1,
            /** 万 */
            Wan = 1 + 10 * 0,

            /** 条 */
            Tiao = 1 + 10 * 1,

            /** 筒 */
            Tong = 1 + 10 * 2,

            /** 字牌, 东南西北中发白 */
            Zi = 1 + 10 * 3,

            /** 花牌, 梅兰竹菊春夏秋冬 */
            Hua = 1 + 10 * 4,

            /** 总数量 */
            TotalCount = 1 + 10 * 4 + BattleConst.HUA_CARD_COUNT
        }

        export enum Chair {
            Invalid = -1,
            Start = 0,
            Down = 0,
            Right = 1,
            Top = 2,
            Left = 3,
            Max = 3,
        }

        // 逆时针方向
        export const CHAIR_MAP = {
            [0]: CardDefines.Chair.Down, // 南
            [1]: CardDefines.Chair.Right, // 东
            [2]: CardDefines.Chair.Top, // 北
            [3]: CardDefines.Chair.Left, // 西
        }

        export enum CardState {
            Invalid = -1,

            /** 手牌 */
            Shoupai,

            /** 已出牌 */
            Chupai,

            /** 碰牌 */
            Pengpai,

            /** 明杠, */
            GangPai,

            /** 暗杠 */
            GangPai2,

            /**吃牌 */
            ChiPai,

            /**财神 */
            HuaPai,

            /**奖马赢的牌 */
            Ma_Win,

            /**奖马输的牌 */
            Ma_Lose,

            // /**显示所有角标 */
            // ShowAll
        }

        /**
         * 对应着麻将的排放方式
         */
        export enum BackGroundType {
            Invalid = -1,
            /**标准放置 下方横排 */
            Stand = 0,
            /**标准放置 上方横排 */
            Stand_Top,
            /**标准放置 左方竖排 */
            Stand_Left,
            /**标准放置 右方竖排 */
            Stand_Right,

            /**平放，正面朝上 */
            Lie_Sur,

            /**平放，正面朝上，周围有黄色光晕 */
            Lie_Sur_Glow_Yellow,

            /**平放，正面朝上，周围有紫色光晕 */
            Lie_Sur_Glow_Purple,

            /**平放，背面朝上 */
            Lie_Back,

            /**横着平放，正面朝上  */
            Lie_H_Sur,

            /**横着平放，正面朝上，周围有黄色光晕  */
            Lie_H_Sur_Glow_Yellow,

            /**横着平放，正面朝上，周围有紫色光晕  */
            Lie_H_Sur_Glow_Purple,

            /**横着平放，背面朝上  */
            Lie_H_Back,

            /**枚举数量，不要使用 */
            COUNT,
        }

        export enum ButtonType {
            Pass = 1,
            Gang = 2,
            Peng = 3,
            Ting = 4,
            Hu = 5
        }

        /**角标类型，默认鬼牌  一般一个地区中只有两种角标*/
        export enum CornerType {
            Invalid = -1,
            Default = 0,
            GuiPai = 0,
            ZhengPai = 1,
            // Count必须正确
            Count = 2
        }

        /** 获取指定牌的类型 */
        export function getCardType(cardNumber: number): CardType {
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

        /** 获取一个牌值是否为有效值 */
        export function isValidCardNumber(cardNumber: number): boolean {
            return cardNumber > 0 && cardNumber < CardDefines.CardType.TotalCount;
        }
    }