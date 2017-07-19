var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CornerType = CardDefines.CornerType;
var demo;
(function (demo) {
    var Card = (function (_super) {
        __extends(Card, _super);
        /**
         * @param backGround:背景图
         */
        function Card(skin) {
            _super.call(this, skin, "");
            this._cardNumber = -1;
            this._cardName = null;
            /**调试用 */
            // public get CardName(): string { return GetCardName(this._cardNumber); }
            this._chair = CardDefines.Chair.Invalid;
            this._cardState = CardDefines.CardState.Invalid;
            this._backGroundType = CardDefines.BackGroundType.Invalid;
            // public get IsGuiPai() { return this._cornerTypes == null ? false : this._cornerTypes.indexOf(CornerType.GuiPai) >= 0; }
            /** 牌面,万条筒等 */
            this.surface = null;
            /** 遮罩,蒙灰 */
            this.darkMask = null;
            /** 该牌的所有角标 */
            this.cornerMasks = {};
            this._cornerTypes = null;
            this.stateNum = 1;
            this.anchorX = 0.5;
            this.anchorY = 0.5;
            for (var i = 0; i < CornerType.Count; i++) {
                this.cornerMasks[i] = null;
            }
        }
        Object.defineProperty(Card.prototype, "CardNumber", {
            /**牌面值 */
            get: function () { return this._cardNumber; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card.prototype, "Chair", {
            /**显示用。属于哪一列（上下左右4个玩家） */
            get: function () { return this._chair; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card.prototype, "CardState", {
            get: function () { return this._cardState; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card.prototype, "BackGroundType", {
            get: function () { return this._backGroundType; },
            enumerable: true,
            configurable: true
        });
        Card.prototype.getCornerTypes = function () {
            return this._cornerTypes;
        };
        // public Reset(cardValue: number, chair: CardDefines.Chair, cardState: CardDefines.CardState, backgroundType: CardDefines.BackGroundType, guiPai: boolean, zhengpai: boolean) {
        Card.prototype.Reset = function (cardValue, chair, cardState, backgroundType, cornerTypes) {
            if (cornerTypes == null || cornerTypes == undefined)
                cornerTypes = [];
            this._cardNumber = cardValue;
            // this._cardName = GetCardName(cardValue);
            this._chair = chair;
            this._cardState = cardState;
            this._backGroundType = backgroundType;
            this._cornerTypes = cornerTypes;
            this.Enable();
        };
        /**
         * 不可操作
         */
        Card.prototype.Disable = function () {
            this.mouseEnabled = false;
            if (this.darkMask)
                this.darkMask.visible = true;
        };
        /**
         * 可操作
         */
        Card.prototype.Enable = function () {
            this.mouseEnabled = true;
            if (this.darkMask)
                this.darkMask.visible = false;
        };
        Card.prototype.isStand = function () {
            return this._backGroundType == CardDefines.BackGroundType.Stand
                || this._backGroundType == CardDefines.BackGroundType.Stand_Top
                || this._backGroundType == CardDefines.BackGroundType.Stand_Left
                || this._backGroundType == CardDefines.BackGroundType.Stand_Right;
        };
        // public setPos(pos: KodGames.Point) {
        //     this.pos(pos.x, pos.y);
        // }
        Card.prototype.hasValidNumber = function () {
            return this._cardNumber > 0 && this._cardNumber < CardDefines.CardType.TotalCount;
        };
        return Card;
    }(laya.ui.Button));
    demo.Card = Card;
})(demo || (demo = {}));
//# sourceMappingURL=Card.js.map