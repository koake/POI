
import CornerType = CardDefines.CornerType;
module demo {
    export class Card extends laya.ui.Button {

        private _cardNumber: number = -1;
        private _cardName: string = null;
        /**牌面值 */
        public get CardNumber(): number { return this._cardNumber; }

        /**调试用 */
        // public get CardName(): string { return GetCardName(this._cardNumber); }

        private _chair = CardDefines.Chair.Invalid;
        /**显示用。属于哪一列（上下左右4个玩家） */
        public get Chair() { return this._chair; }

        private _cardState = CardDefines.CardState.Invalid;
        public get CardState() { return this._cardState; }

        private _backGroundType = CardDefines.BackGroundType.Invalid;
        public get BackGroundType() { return this._backGroundType; }

        // public get IsGuiPai() { return this._cornerTypes == null ? false : this._cornerTypes.indexOf(CornerType.GuiPai) >= 0; }

        /** 牌面,万条筒等 */
        public surface: Laya.Image = null;
        /** 遮罩,蒙灰 */
        public darkMask: Laya.Image = null;

        /** 该牌的所有角标 */
        public cornerMasks: { [idx: number]: Laya.Image } = {};

        private _cornerTypes: CornerType[] = null;
        public getCornerTypes(): CornerType[] {
            return this._cornerTypes;
        }

        /**
         * @param backGround:背景图
         */
        constructor(skin: string) {
            super(skin, "");
            this.stateNum = 1;
            this.anchorX = 0.5;
            this.anchorY = 0.5;

            for (let i = 0; i < CornerType.Count; i++) {
                this.cornerMasks[i] = null;
            }

        }

        // public Reset(cardValue: number, chair: CardDefines.Chair, cardState: CardDefines.CardState, backgroundType: CardDefines.BackGroundType, guiPai: boolean, zhengpai: boolean) {
        public Reset(cardValue: number, chair: CardDefines.Chair, cardState: CardDefines.CardState, backgroundType: CardDefines.BackGroundType, cornerTypes: CornerType[]) {
            if (cornerTypes == null || cornerTypes == undefined)
                cornerTypes = [];

            this._cardNumber = cardValue;
            // this._cardName = GetCardName(cardValue);
            this._chair = chair;
            this._cardState = cardState;
            this._backGroundType = backgroundType;
            this._cornerTypes = cornerTypes;
            this.Enable();
        }

        /**
         * 不可操作
         */
        public Disable() {
            this.mouseEnabled = false;
            if (this.darkMask)
                this.darkMask.visible = true;
        }

        /**
         * 可操作
         */
        public Enable() {
            this.mouseEnabled = true;
            if (this.darkMask)
                this.darkMask.visible = false;
        }

        public isStand(): boolean {
            return this._backGroundType == CardDefines.BackGroundType.Stand
                || this._backGroundType == CardDefines.BackGroundType.Stand_Top
                || this._backGroundType == CardDefines.BackGroundType.Stand_Left
                || this._backGroundType == CardDefines.BackGroundType.Stand_Right;
        }

        // public setPos(pos: KodGames.Point) {
        //     this.pos(pos.x, pos.y);
        // }

        public hasValidNumber(): boolean {
            return this._cardNumber > 0 && this._cardNumber < CardDefines.CardType.TotalCount;
        }
    }
}