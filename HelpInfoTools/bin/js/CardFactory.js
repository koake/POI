var demo;
(function (demo) {
    var Map = kodUtil.HashMap;
    var CardState = CardDefines.CardState;
    var BackGroundType = CardDefines.BackGroundType;
    var Chair = CardDefines.Chair;
    var CardType = CardDefines.CardType;
    var CornerType = CardDefines.CornerType;
    var Card = demo.Card;
    demo.ONE_CARD_MAX = 4;
    demo.ONE_TYPE_MAX = 9;
    demo.PLAY_CARD_COUNT = 13;
    demo.ZI_TYPE_MAX = 7;
    demo.HUA_TYPE_MAX = 8;
    var CornerConfig = (_a = {},
        _a[CornerType.GuiPai] = "mahjong_tile/icon_gui.png",
        _a[CornerType.ZhengPai] = "mahjong_tile/icon_zheng.png",
        _a
    );
    var surfaceConfig = (_b = {},
        _b[CardType.Wan + 0] = { skin: "mahjong_tile/w_1.png", name: "一万" },
        _b[CardType.Wan + 1] = { skin: "mahjong_tile/w_2.png", name: "二万" },
        _b[CardType.Wan + 2] = { skin: "mahjong_tile/w_3.png", name: "三万" },
        _b[CardType.Wan + 3] = { skin: "mahjong_tile/w_4.png", name: "四万" },
        _b[CardType.Wan + 4] = { skin: "mahjong_tile/w_5.png", name: "五万" },
        _b[CardType.Wan + 5] = { skin: "mahjong_tile/w_6.png", name: "六万" },
        _b[CardType.Wan + 6] = { skin: "mahjong_tile/w_7.png", name: "七万" },
        _b[CardType.Wan + 7] = { skin: "mahjong_tile/w_8.png", name: "八万" },
        _b[CardType.Wan + 8] = { skin: "mahjong_tile/w_9.png", name: "九万" },
        _b[CardType.Tiao + 0] = { skin: "mahjong_tile/tiao_1.png", name: "幺鸡" },
        _b[CardType.Tiao + 1] = { skin: "mahjong_tile/tiao_2.png", name: "二条" },
        _b[CardType.Tiao + 2] = { skin: "mahjong_tile/tiao_3.png", name: "三条" },
        _b[CardType.Tiao + 3] = { skin: "mahjong_tile/tiao_4.png", name: "四条" },
        _b[CardType.Tiao + 4] = { skin: "mahjong_tile/tiao_5.png", name: "五条" },
        _b[CardType.Tiao + 5] = { skin: "mahjong_tile/tiao_6.png", name: "六条" },
        _b[CardType.Tiao + 6] = { skin: "mahjong_tile/tiao_7.png", name: "七条" },
        _b[CardType.Tiao + 7] = { skin: "mahjong_tile/tiao_8.png", name: "八条" },
        _b[CardType.Tiao + 8] = { skin: "mahjong_tile/tiao_9.png", name: "九条" },
        _b[CardType.Tong + 0] = { skin: "mahjong_tile/tong_1.png", name: "一筒" },
        _b[CardType.Tong + 1] = { skin: "mahjong_tile/tong_2.png", name: "二筒" },
        _b[CardType.Tong + 2] = { skin: "mahjong_tile/tong_3.png", name: "三筒" },
        _b[CardType.Tong + 3] = { skin: "mahjong_tile/tong_4.png", name: "四筒" },
        _b[CardType.Tong + 4] = { skin: "mahjong_tile/tong_5.png", name: "五筒" },
        _b[CardType.Tong + 5] = { skin: "mahjong_tile/tong_6.png", name: "六筒" },
        _b[CardType.Tong + 6] = { skin: "mahjong_tile/tong_7.png", name: "七筒" },
        _b[CardType.Tong + 7] = { skin: "mahjong_tile/tong_8.png", name: "八筒" },
        _b[CardType.Tong + 8] = { skin: "mahjong_tile/tong_9.png", name: "九筒" },
        _b[CardType.Zi + 0] = { skin: "mahjong_tile/dong.png", name: "东" },
        _b[CardType.Zi + 1] = { skin: "mahjong_tile/nan.png", name: "南" },
        _b[CardType.Zi + 2] = { skin: "mahjong_tile/xi.png", name: "西" },
        _b[CardType.Zi + 3] = { skin: "mahjong_tile/bei.png", name: "北" },
        _b[CardType.Zi + 4] = { skin: "mahjong_tile/zhong.png", name: "中" },
        _b[CardType.Zi + 5] = { skin: "mahjong_tile/fa.png", name: "发" },
        _b[CardType.Zi + 6] = { skin: "mahjong_tile/bai.png", name: "白" },
        _b[CardType.Hua + 0] = { skin: "mahjong_tile/tiao_45.png", name: "春" },
        _b[CardType.Hua + 1] = { skin: "mahjong_tile/tiao_46.png", name: "夏" },
        _b[CardType.Hua + 2] = { skin: "mahjong_tile/tiao_47.png", name: "秋" },
        _b[CardType.Hua + 3] = { skin: "mahjong_tile/tiao_48.png", name: "冬" },
        _b[CardType.Hua + 4] = { skin: "mahjong_tile/tiao_41.png", name: "梅" },
        _b[CardType.Hua + 5] = { skin: "mahjong_tile/tiao_42.png", name: "兰" },
        _b[CardType.Hua + 6] = { skin: "mahjong_tile/tiao_43.png", name: "竹" },
        _b[CardType.Hua + 7] = { skin: "mahjong_tile/tiao_44.png", name: "菊" },
        _b
    );
    function GetCardName(cardNumber) {
        var config = surfaceConfig[cardNumber];
        if (config == undefined)
            return "" + cardNumber;
        else
            return config.name;
    }
    demo.GetCardName = GetCardName;
    demo.backGroundConfig = (_c = {},
        _c[BackGroundType.Stand] = {
            skin: "mahjong_tile/mj_bg.png",
            txSize: { width: 64, height: 94 },
            surSize_Hua: { width: 47, height: 65 },
            surSize: { width: 66, height: 94 },
            surDelta: { x: 0, y: 2 },
            surDelta_Hua: { x: 0, y: 8 },
            guiPosi: { x: 32, y: 45 },
            guiSize: { width: 63, height: 90 }
        },
        _c[BackGroundType.Stand_Top] = {
            skin: "mahjong_tile/mj_bg3.png",
            // txSize: { width: 40, height: 60 },
            txSize: { width: 38, height: 60 },
            surDelta: { x: 0, y: 0 }
        },
        _c[BackGroundType.Stand_Left] = {
            skin: "mahjong_tile/mj_bg5.png",
            txSize: { width: 24, height: 58 },
            surDelta: { x: 0, y: 0 }
        },
        _c[BackGroundType.Stand_Right] = {
            skin: "mahjong_tile/mj_bg4.png",
            txSize: { width: 24, height: 58 },
            surDelta: { x: 0, y: 0 }
        },
        _c[BackGroundType.Lie_Sur] = {
            skin: "mahjong_tile/mj_bg2.png",
            txSize: { width: 42, height: 62 },
            surSize_Hua: { width: 29, height: 39 },
            surSize: { width: 38, height: 56 },
            surDelta: { x: 2, y: -9 },
            surDelta_Hua: { x: 0, y: -7 },
            surDeltaTop: { x: 2, y: 0 },
            guiPosi: { x: 21, y: 30 },
            guiSize: { width: 41, height: 58 }
        },
        // 这个是带了光的背景图
        _c[BackGroundType.Lie_Sur_Glow_Yellow] = {
            skin: "mahjong_tile/mj_bg9.png",
            txSize: { width: 60, height: 79 },
            surSize_Hua: { width: 29, height: 39 },
            surSize: { width: 38, height: 56 },
            surDelta: { x: 11, y: -2 },
            surDeltaTop: { x: 11, y: 8 },
            surDelta_Hua: { x: 0, y: -7 }
        },
        _c[BackGroundType.Lie_Sur_Glow_Purple] = {
            skin: "mahjong_tile/mj_bg11.png",
            txSize: { width: 60, height: 79 },
            surSize_Hua: { width: 29, height: 39 },
            surSize: { width: 38, height: 56 },
            surDelta: { x: 11, y: -2 },
            surDeltaTop: { x: 11, y: 8 },
            surDelta_Hua: { x: 0, y: -7 }
        },
        _c[BackGroundType.Lie_Back] = {
            skin: "mahjong_tile/mj_bg7.png",
            txSize: { width: 40, height: 60 },
            surDelta: { x: 0, y: 0 }
        },
        _c[BackGroundType.Lie_H_Sur] = {
            skin: "mahjong_tile/mj_bg6.png",
            txSize: { width: 54, height: 44 },
            surSize_Hua: { width: 25, height: 34 },
            surSize: { width: 32, height: 46 },
            surDelta: { x: 14, y: -8 },
            surDelta_Hua: { x: 0, y: -7 },
            surDeltaRight: { x: 7, y: -8 },
            guiPosi_Left: { x: 32, y: 15 },
            guiPosi_Right: { x: 21, y: 15 },
            guiSize: { width: 28, height: 40 }
        },
        _c[BackGroundType.Lie_H_Sur_Glow_Yellow] = {
            skin: "mahjong_tile/mj_bg10.png",
            txSize: { width: 76, height: 66 },
            surSize_Hua: { width: 25, height: 34 },
            surSize: { width: 32, height: 46 },
            surDelta: { x: 26, y: 3 },
            surDeltaRight: { x: 20, y: 3 },
            surDelta_Hua: { x: 0, y: -7 },
        },
        _c[BackGroundType.Lie_H_Sur_Glow_Purple] = {
            skin: "mahjong_tile/mj_bg12.png",
            txSize: { width: 76, height: 66 },
            surSize_Hua: { width: 25, height: 34 },
            surSize: { width: 32, height: 46 },
            surDelta: { x: 26, y: 3 },
            surDeltaRight: { x: 20, y: 3 },
            surDelta_Hua: { x: 0, y: -7 },
        },
        _c[BackGroundType.Lie_H_Back] = {
            skin: "mahjong_tile/mj_bg8.png",
            txSize: { width: 53, height: 44 },
            surDelta: { x: 0, y: 0 }
        },
        _c
    );
    var CardImagePool = (function () {
        function CardImagePool() {
            /**
             * 牌面池
             */
            this.surfacePool = new Map();
            this.livingSurfaceCount = 0;
            /**遮罩池。 */
            this.darkMaskPool = [];
            this.livingDardMaskCount = 0;
            /**鬼牌遮罩 */
            // private guiMaskPool: Laya.Image[] = [];
            // private livingGuiMaskCount = 0;
            // /**正牌遮罩 */
            // private zhengMaskPool: Laya.Image[] = [];
            /**
             * 背景图池
             */
            this.cardPool = new Map();
            this.livingCardCount = 0;
            /** 角标遮罩池，包括鬼牌遮罩和正牌遮罩, index 使用cornerType */
            this.cornerMaskPools = {};
            this.livingCornerMaskArrayCount = {};
            // 构造牌面pool
            for (var index = CardType.Wan; index < CardType.Wan + demo.ONE_TYPE_MAX; index++)
                this.surfacePool.put(index, new Array());
            for (var index = CardType.Tiao; index < CardType.Tiao + demo.ONE_TYPE_MAX; index++)
                this.surfacePool.put(index, new Array());
            for (var index = CardType.Tong; index < CardType.Tong + demo.ONE_TYPE_MAX; index++)
                this.surfacePool.put(index, new Array());
            for (var index = CardType.Zi; index < CardType.Zi + 7; index++)
                this.surfacePool.put(index, new Array());
            for (var index = CardType.Hua; index < CardType.Hua + 8; index++)
                this.surfacePool.put(index, new Array());
            // 构造牌底pool
            for (var index = BackGroundType.Stand; index < BackGroundType.COUNT; index++)
                this.cardPool.put(index, new Array());
            // 构建角标遮罩池
            for (var i = 0; i < CornerType.Count; i++) {
                this.cornerMaskPools[i] = new Array();
                this.livingCornerMaskArrayCount[i] = 0;
            }
        }
        Object.defineProperty(CardImagePool, "Instance", {
            get: function () {
                if (this._Instance == null)
                    this._Instance = new CardImagePool();
                return this._Instance;
            },
            enumerable: true,
            configurable: true
        });
        CardImagePool.prototype.spawnCard = function (backGround) {
            var stack = this.cardPool.get(backGround);
            var card = null;
            if (stack.length != 0) {
                card = stack.pop();
            }
            if (card == null)
                card = new Card(demo.backGroundConfig[backGround].skin);
            card.visible = true;
            card.mouseEnabled = true;
            this.livingCardCount++;
            return card;
        };
        /**
         * 根据牌面值从池中获取牌面图片。
         */
        CardImagePool.prototype.spawnSurface = function (value) {
            var stack = this.surfacePool.get(value);
            var image = null;
            if (stack.length != 0) {
                image = stack.pop();
            }
            if (image == null)
                image = new Laya.Image(surfaceConfig[value].skin);
            image.visible = true;
            this.livingSurfaceCount++;
            return image;
        };
        CardImagePool.prototype.spawnDarkMask = function () {
            var image = null;
            if (this.darkMaskPool.length > 0) {
                image = this.darkMaskPool.pop();
            }
            if (image == null)
                image = new Laya.Image("mahjong_tile/mj_mb.png");
            image.visible = true;
            image.alpha = 0.4;
            this.livingDardMaskCount++;
            return image;
        };
        /**传入角标类型，返回对应角标遮罩 */
        CardImagePool.prototype.SpawnCornerMask = function (_type) {
            if (_type === void 0) { _type = CornerType.GuiPai; }
            var type = Number(_type);
            var image = null;
            if (this.cornerMaskPools[type].length != 0) {
                image = this.cornerMaskPools[type].pop();
            }
            if (image == null) {
                image = new Laya.Image(CornerConfig[type]);
            }
            this.livingCornerMaskArrayCount[type]++;
            // console.error("master mask : " + this.livingCornerMaskArrayCount[type]);
            image.visible = true;
            return image;
        };
        CardImagePool._Instance = null;
        return CardImagePool;
    }());
    var CardFactory = (function () {
        function CardFactory() {
        }
        /** 获取Card牌面纹理名 */
        CardFactory.getSurfaceSkin = function (cardNumber) {
            var config = surfaceConfig[cardNumber];
            if (config == undefined)
                return "" + cardNumber;
            else
                return config.skin;
        };
        /**
         * 创建牌。从池中重用
         *
         * @param 牌面值。不传则没有牌面。如果是扣着的牌，也不会创建牌面。
         */
        CardFactory.createCard = function (chair, state, cardValue, cornerTypes, sizeScale) {
            if (cardValue === void 0) { cardValue = -1; }
            if (cornerTypes === void 0) { cornerTypes = null; }
            var _scale = (sizeScale == undefined || sizeScale <= 0) ? 1 : sizeScale;
            var _surScale = (sizeScale == undefined || sizeScale <= 0) ? 1 : sizeScale;
            if (cardValue == undefined)
                cardValue = -1;
            var card = null;
            // 牌面图案的旋转
            var surRotation = 0;
            var haveSurface = true;
            var backGroundType = BackGroundType.Invalid;
            switch (state) {
                case CardState.Shoupai:
                    {
                        if (cardValue <= 0 || cardValue == 255) {
                            switch (chair) {
                                case Chair.Down:
                                    backGroundType = BackGroundType.Stand;
                                    break;
                                case Chair.Left:
                                    backGroundType = BackGroundType.Stand_Left;
                                    haveSurface = false;
                                    break;
                                case Chair.Right:
                                    backGroundType = BackGroundType.Stand_Right;
                                    haveSurface = false;
                                    break;
                                case Chair.Top:
                                    backGroundType = BackGroundType.Stand_Top;
                                    haveSurface = false;
                                    break;
                            }
                        }
                        else {
                            switch (chair) {
                                case Chair.Down:
                                    backGroundType = BackGroundType.Stand;
                                    break;
                                case Chair.Left:
                                    backGroundType = BackGroundType.Lie_H_Sur;
                                    surRotation = 90;
                                    break;
                                case Chair.Right:
                                    backGroundType = BackGroundType.Lie_H_Sur;
                                    surRotation = -90;
                                    break;
                                case Chair.Top:
                                    backGroundType = BackGroundType.Lie_Sur;
                                    surRotation = 180;
                                    break;
                            }
                        }
                    }
                    break;
                case CardState.Chupai:
                case CardState.Pengpai:
                case CardState.GangPai:
                case CardState.ChiPai:
                case CardState.HuaPai:
                    {
                        switch (chair) {
                            case Chair.Down:
                                backGroundType = BackGroundType.Lie_Sur;
                                break;
                            case Chair.Left:
                                backGroundType = BackGroundType.Lie_H_Sur;
                                surRotation = 90;
                                break;
                            case Chair.Right:
                                backGroundType = BackGroundType.Lie_H_Sur;
                                surRotation = -90;
                                break;
                            case Chair.Top:
                                backGroundType = BackGroundType.Lie_Sur;
                                surRotation = 180;
                                break;
                        }
                    }
                    break;
                case CardState.GangPai2:
                    {
                        haveSurface = false;
                        switch (chair) {
                            case Chair.Down:
                                backGroundType = BackGroundType.Lie_Back;
                                break;
                            case Chair.Left:
                                backGroundType = BackGroundType.Lie_H_Back;
                                break;
                            case Chair.Right:
                                backGroundType = BackGroundType.Lie_H_Back;
                                break;
                            case Chair.Top:
                                backGroundType = BackGroundType.Lie_Back;
                                break;
                        }
                    }
                    break;
                case CardState.Ma_Lose:
                    {
                        haveSurface = true;
                        switch (chair) {
                            case Chair.Down:
                                backGroundType = BackGroundType.Lie_Sur_Glow_Purple;
                                break;
                            case Chair.Left:
                                backGroundType = BackGroundType.Lie_H_Sur_Glow_Purple;
                                surRotation = 90;
                                break;
                            case Chair.Right:
                                backGroundType = BackGroundType.Lie_H_Sur_Glow_Purple;
                                surRotation = -90;
                                break;
                            case Chair.Top:
                                backGroundType = BackGroundType.Lie_Sur_Glow_Purple;
                                surRotation = 180;
                                break;
                        }
                    }
                    break;
                case CardState.Ma_Win:
                    {
                        haveSurface = true;
                        switch (chair) {
                            case Chair.Down:
                                backGroundType = BackGroundType.Lie_Sur_Glow_Yellow;
                                break;
                            case Chair.Left:
                                backGroundType = BackGroundType.Lie_H_Sur_Glow_Yellow;
                                surRotation = 90;
                                break;
                            case Chair.Right:
                                backGroundType = BackGroundType.Lie_H_Sur_Glow_Yellow;
                                surRotation = -90;
                                break;
                            case Chair.Top:
                                backGroundType = BackGroundType.Lie_Sur_Glow_Yellow;
                                surRotation = 180;
                                break;
                        }
                    }
                    break;
                default:
                    break;
            }
            if (backGroundType == BackGroundType.Invalid) {
                console.error("Invalid state type or chair type.");
                return null;
            }
            var config = demo.backGroundConfig[backGroundType];
            card = CardImagePool.Instance.spawnCard(backGroundType);
            // 创建牌面。
            if (haveSurface) {
                if (cardValue == -1) {
                    // 应该有牌面值，但是没传牌面值
                    throw new Error("haveSurface && cardValue==-1");
                }
                card.surface = CardImagePool.Instance.spawnSurface(cardValue);
                if (cardValue >= CardType.Hua)
                    card.surface.size(config.surSize_Hua.width * _surScale, config.surSize_Hua.height * _surScale);
                else
                    card.surface.size(config.surSize.width * _surScale, config.surSize.height * _surScale);
                card.surface.pivot(card.surface.width / 2, card.surface.height / 2);
                card.surface.rotation = surRotation;
                card.addChild(card.surface);
                // 逻辑有点恶心。主要是因为图片中图案不在图的正中间，麻将背景本身正面也不是在正中间的，不同的旋转要错开不同的位置
                if (cardValue >= CardType.Hua)
                    card.surface.pos((config.txSize.width / 2 + config.surDelta_Hua.x) * _scale, (config.txSize.height / 2 + config.surDelta_Hua.y) * _scale);
                else {
                    if (surRotation == 180) {
                        card.surface.pos((config.surSize.width / 2 + config.surDeltaTop.x) * _scale, (config.surSize.height / 2 + config.surDeltaTop.y) * _scale);
                    }
                    else if (surRotation == -90) {
                        card.surface.pos((config.surSize.width / 2 + config.surDeltaRight.x) * _scale, (config.surSize.height / 2 + config.surDeltaRight.y) * _scale);
                    }
                    else {
                        card.surface.pos((config.surSize.width / 2 + config.surDelta.x) * _scale, (config.surSize.height / 2 + config.surDelta.y) * _scale);
                    }
                }
                // 创建蒙灰
                if (chair == Chair.Down && state == CardState.Shoupai) {
                    card.darkMask = CardImagePool.Instance.spawnDarkMask();
                    card.darkMask.size(config.txSize.width * _scale, config.txSize.height * _scale);
                    card.darkMask.pivot(card.darkMask.width / 2, card.darkMask.height / 2);
                    card.darkMask.pos((config.txSize.width / 2) * _scale, (config.txSize.height / 2) * _scale);
                    // card.darkMask.visible = false;
                    card.addChild(card.darkMask);
                }
                // 角标整个图片的摆放位置都是统一的
                // if (cornerTypes != [] && !GFunc.isNullOrUndefine(cornerTypes)) {
                if (cornerTypes != [] && cornerTypes != null && cornerTypes != undefined) {
                    for (var _i = 0, cornerTypes_1 = cornerTypes; _i < cornerTypes_1.length; _i++) {
                        var type = cornerTypes_1[_i];
                        if (type < 0 || type > CornerType.Count)
                            throw "在创建牌的时候传入了错误的角标类型";
                        if (card.cornerMasks[type] != null) {
                            card.cornerMasks[type].visible = true;
                            continue;
                        }
                        card.cornerMasks[type] = CardImagePool.Instance.SpawnCornerMask(type);
                        card.cornerMasks[type].rotation = surRotation;
                        card.cornerMasks[type].size(config.guiSize.width * _surScale, config.guiSize.height * _surScale);
                        card.cornerMasks[type].pivot(card.cornerMasks[type].width / 2, card.cornerMasks[type].height / 2);
                        switch (backGroundType) {
                            case BackGroundType.Stand:
                            case BackGroundType.Lie_Sur:
                                card.cornerMasks[type].pos(config.guiPosi.x * _scale, config.guiPosi.y * _scale);
                                break;
                            case BackGroundType.Lie_H_Sur:
                                if (surRotation == 90)
                                    card.cornerMasks[type].pos(config.guiPosi_Left.x * _scale, config.guiPosi_Left.y * _scale);
                                else
                                    card.cornerMasks[type].pos(config.guiPosi_Right.x * _scale, config.guiPosi_Right.y * _scale);
                                break;
                        }
                        card.addChild(card.cornerMasks[type]);
                        console.error("cardValue: " + cardValue + ", has cornerMask , type = " + type);
                    }
                }
            }
            card.size(config.txSize.width * _scale, config.txSize.height * _scale);
            card.pivot(card.width / 2, card.height / 2);
            card.scale(1, 1);
            card.Reset(cardValue, chair, state, backGroundType, cornerTypes);
            card.visible = true;
            return card;
        };
        return CardFactory;
    }());
    demo.CardFactory = CardFactory;
    var _a, _b, _c;
})(demo || (demo = {}));
//# sourceMappingURL=CardFactory.js.map